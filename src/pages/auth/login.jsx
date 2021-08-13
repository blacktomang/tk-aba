import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled, { css } from 'styled-components';
import { Layout } from '../../components/auth/auth.styles';
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
  return (
    <>
      <Head>
        <title>FishLog | Login</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Layout>
        <div>
          <div style={{ width: '100%' }}>
            <Image src="/images/auth-banner.png" width={500} height={250} alt="auth banner" layout="responsive" />
          </div>
        </div>
        <div>
          <h1>Masuk</h1>
          <p>
            Selamat datang kembali di <br />
            Platform Ekosistem Rantai Pasok Perikanan <br /> Terintegrasi di Indonesia
          </p>
          <Input placeholder="Enter Your Email" type="text" />
          <Input placeholder="Enter Your Password" type="password" autoComplete="false" />
          <AdditionForm>
            <div className="checkbox">
              <input type="checkbox" name="" id="t" />
              <label htmlFor="t">Ingat Saya</label>
            </div>
            <div>
              <Link href="/auth/reset-sandi">
                <a>Lupa Password?</a>
              </Link>
            </div>
          </AdditionForm>
          <Input value="Masuk" type="submit" $masuk="var(--first-color)" />
          <AdditionForm $toRegister>
            <div>
              <Link href="">
                <a>Belum memiliki akun?</a>
              </Link>
            </div>
            <div style={{ width: '50%' }}>
              <Input
                value="Daftar Sekarang"
                type="submit"
                $masuk="#FFB946"
                $register
                onClick={() => router.push('/auth/register')}
              />
            </div>
          </AdditionForm>
        </div>
      </Layout>
    </>
  );
}

export default Login;
