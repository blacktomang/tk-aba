import React, { useContext, useEffect, useState } from 'react';
import { auth, db } from '../../firebase/firebase';

export const UserContext = React.createContext();

export const getUser = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });

    unsub();
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
