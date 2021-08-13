import React, { useContext,createContext,useEffect, useState } from 'react';
import { auth, db, timeStamp } from '../../firebase/firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress } from '@material-ui/core';
import Image from 'next/image';
import { myLoader } from 'ImageLoader/loader';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const AuthContext = createContext();

export default function AuthProvider({ children }){
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const classes = useStyles();

  const onAuthStateChanged = (usr) => {
    checkAuth(usr)
      .then((authenticated) => {
        setIsAuthenticated(authenticated);
      })
      .catch(() => setIsAuthenticated(false));
    if (initializing) setInitializing(false);
  };

  const checkAuth = async (data) => {
    try {
      let doc = await db.collection('users').doc(data?.uid).get();
      if (doc.exists) {
        let dataUsr = doc.data();
        if (dataUsr?.role === 'ADMIN' || dataUsr?.role === 'FIA_CARE') {
          setUser({ id: data?.uid, ...dataUsr });
          return true;
        }
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        login: (email, password) => {
          return new Promise(async (resolve, reject) => {
            try {
              await auth.signInWithEmailAndPassword(email, password);
              let ok = await checkAuth(auth.currentUser);
              if (!ok) {
                reject({ code: 'auth/user-not-found' });
              }
              resolve();
            } catch (e) {
              let code = e.code;
              let message = '';
              switch (code) {
                case 'auth/wrong-password':
                case 'auth/user-not-found':
                  message = 'Username or password incorrect';
                  break;
                case 'unauthorized':
                  message = 'Account unauthorized';
                  break;
                default:
                  message = e;
              }
              reject({ message });
            }
          });
        },
        logout: async () => {
          return new Promise(async (resolve, reject) => {
            try {
              await auth.signOut();
              setUser(null);
              resolve();
            } catch (e) {
              console.log(e);
              reject(e);
            }
          });
        },
        register: async (data) => {
          return new Promise(async (resolve, reject) => {
            auth
              .createUserWithEmailAndPassword(data.email, data.password)
              .then(() => {
                return db.collection('users').doc(auth.currentUser.uid).set({
                  name: data.fullName,
                  email: data.email,
                  createdAt: timeStamp,
                  updatedAt: timeStamp,
                  userImg: null,
                  role: 'ADMIN',
                });
              })
              .then(() => resolve())
              .catch((e) => reject(e));
          });
        },
      }}
    >
      {initializing || isAuthenticated === null ? (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#f5f7f6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center'
          }}
        >
          <div
          // style={{
          //   display: 'flex',
          //   flexDirection: 'column',
          //   justifyContent: 'center',
          // }}
          >
            <p style={{ color: 'var(--first-color)' }}>TK Aisyiyah Bustanul Athfal</p>
            <Image src="/loading.gif" height={180} width={200} loader={myLoader} />
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
