import { EvaIcon, Spinner, Toastr } from '@paljs/ui';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useContext, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Layout } from '../../components/auth/auth.styles';
import { AuthContext } from '../../components/context/userObserver';
import { StyledInput } from '../../components/form-slicing/input.styles';

export const Input = styled(StyledInput)`
  border: 0.2px solid #dad9d9 !important;
  padding: 0.8rem 1rem !important;
  border-radius: 30px;
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1rem;
  &::placeholder {
    font-style: normal;
  }
  ${({ $masuk }) =>
    $masuk &&
    css`
      background-color: ${$masuk};
      padding: 0.6rem 0.8rem;
      border: none;
      color: white;
      border-color: ${$masuk};
      font-family: 'Poppins Bold';
      cursor: pointer;
      transition: all 0.2s ease-in;
      &[type='submit']:disabled {
        opacity: 0.5;
      }
    `}
  ${({ $masuk }) =>
    $masuk === '#FFB946' &&
    css`
      font-family: 'Poppins';
      font-size: 1rem;
    `}
`;
export const AdditionForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 1rem auto 2rem auto;
  color: #979797;
  a {
    color: #979797;
  }
  .checkbox {
    display: flex;
    justify-content: space-between;
    width: 110px;
    align-items: center;
    font-family: 'Poppins';
    cursor: pointer;
    input,
    label {
      cursor: pointer;
    }
  }
  ${({ $toRegister }) => ($toRegister ? 'width:100%' : '')};
`;
function Login() {
  const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toastrRef = useRef(null);
  const { login, setIsAuthenticated } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const _login = (e) => {
    e.preventDefault();
    e.preventDefault();
    setIsLoading(true);
    login(email, password)
      .then(() => {
        setIsAuthenticated(true);
        router.replace('/admin/panel/dd');
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.message);
      });
  };
  return (
    <Fragment>
      <Head>
        <title>FishLog | Login</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Layout>
        <div>
          <div style={{ width: '100%', display:"flex", justifyContent:"center"}}>
            <h2 style={{ color: "white" }}>Admin Panel TK ABA</h2>
            <small style={{fontFamily:"Poppins", color:"white", fontSize:"10px"}}>by UMM PMM 2021</small>
          </div>
        </div>
        <div>
          <h1>Masuk</h1>
          <p>
            Selamat datang kembali di <br />
            Platform Ekosistem Rantai Pasok Perikanan <br /> Terintegrasi di Indonesia
          </p>
          <form onSubmit={_login}>
            {isLoading && <Spinner />}
            <Input placeholder="Enter Your Email" type="text" onChange={(e) => setEmail(e.target.value)} />
            <Input
              placeholder="Enter Your Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="false"
              onChange={(e) => setPassword(e.target.value)}
            />
            <AdditionForm>
              <div className="checkbox" onClick={() => setShowPassword(!showPassword)} style={{ width: '100%'}}>
                <p>{showPassword ? 'Hide Password' : 'Show Password'}</p>
              </div>
            </AdditionForm>
            <Input value="Masuk" type="submit" onClick={_login} $masuk="var(--first-color)" />
          </form>
        </div>
      </Layout>
    </Fragment>
  );
}

export default Login;
