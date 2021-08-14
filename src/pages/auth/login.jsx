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

const Loading = styled.div`
  /* Absolute Center Spinner */
  & {
    position: fixed;
    z-index: 999;
    height: 2em;
    width: 2em;
    overflow: visible;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  /* Transparent Overlay */
  &:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  /* :not(:required) hides these rules from IE9 and below */
  &:not(:required) {
    /* hide "loading..." text */
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }

  &:not(:required):after {
    content: '';
    display: block;
    font-size: 10px;
    width: 1em;
    height: 1em;
    margin-top: -0.5em;
    -webkit-animation: spinner 1500ms infinite linear;
    -moz-animation: spinner 1500ms infinite linear;
    -ms-animation: spinner 1500ms infinite linear;
    -o-animation: spinner 1500ms infinite linear;
    animation: spinner 1500ms infinite linear;
    border-radius: 0.5em;
    -webkit-box-shadow: rgba(74, 194, 154, 0.75) 1.5em 0 0 0, rgba(74, 194, 154, 0.75) 1.1em 1.1em 0 0,
      rgba(74, 194, 154, 0.75) 0 1.5em 0 0, rgba(74, 194, 154, 0.75) -1.1em 1.1em 0 0, rgba(74, 194, 154, 0.5) -1.5em 0 0 0,
      rgba(74, 194, 154, 0.5) -1.1em -1.1em 0 0, rgba(74, 194, 154, 0.75) 0 -1.5em 0 0, rgba(74, 194, 154, 0.75) 1.1em -1.1em 0 0;
    box-shadow: rgba(74, 194, 154, 0.75) 1.5em 0 0 0, rgba(74, 194, 154, 0.75) 1.1em 1.1em 0 0, rgba(74, 194, 154, 0.75) 0 1.5em 0 0,
      rgba(74, 194, 154, 0.75) -1.1em 1.1em 0 0, rgba(74, 194, 154, 0.75) -1.5em 0 0 0, rgba(74, 194, 154, 0.75) -1.1em -1.1em 0 0,
      rgba(74, 194, 154, 0.75) 0 -1.5em 0 0, rgba(74, 194, 154, 0.75) 1.1em -1.1em 0 0;
  }

  /* Animation */

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
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
        <title>Admin Panel TK | Login</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Layout>
        <div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <h2 style={{ color: 'white' }}>Admin Panel TK ABA</h2>
            <small style={{ fontFamily: 'Poppins', color: 'white', fontSize: '10px' }}>by UMM PMM 2021</small>
          </div>
        </div>
        <div>
          <h1>Masuk</h1>
          <p>
            Selamat datang kembali di <br />
            Admin Panel TK ABA <br />
          </p>
          <form onSubmit={_login}>
            {isLoading && <Loading>Loading&#8230;</Loading>}
            <Input placeholder="Enter Your Email" type="text" onChange={(e) => setEmail(e.target.value)} />
            <Input
              placeholder="Enter Your Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="false"
              onChange={(e) => setPassword(e.target.value)}
            />
            <AdditionForm>
              <div className="checkbox" onClick={() => setShowPassword(!showPassword)} style={{ width: '100%' }}>
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
