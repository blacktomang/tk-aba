import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'react-responsive-modal/styles.css';
import  AuthProvider  from '../components/context/userObserver';
// import { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';

export default function App({ Component, pageProps }: AppProps) {
  // const [mount, setMount] = useState(false);
  // useEffect(() => {
  //   setMount(true);
  // }, []);

  return (
      <AuthProvider><Component {...pageProps} /></AuthProvider>
  );
}
