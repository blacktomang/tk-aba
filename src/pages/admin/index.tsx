import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function admin() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/auth/login');
    return () => {
    }
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default admin
