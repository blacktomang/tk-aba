import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../components/context/userObserver'

function logout() {
  const router = useRouter();
  const { logout } = useContext(AuthContext);
  useEffect(async() => {
    const a = await logout();
    router.replace('/auth/login');
    return ()=>a;
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default logout
