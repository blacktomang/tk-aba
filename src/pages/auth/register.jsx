import { auth, db, timeStamp } from '../../firebase/firebase';
import produce from 'immer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { Layout } from '../../components/auth/auth.styles';
import Dropdown from '../../components/form-slicing/dropdown';
import { getCityList, getProvinceList } from '../../golang-api/address';
import { login, register } from '../../golang-api/auth';
import { AdditionForm, Input } from './login';
import AddString from '../../components/context/addString';
import { getUser } from '../../components/context/userObserver';

export const CustomSelect = styled(Select)`
  width: 100%;
  margin-top: 1.2rem;
  font-family: 'Poppins';
  & > div {
    padding: 0.3rem 0.8rem;
    border-radius: 30px;
    &:hover {
      border-color: var(--first-color);
    }
    &::focus {
      border-color: var(--first-color);
      box-shadow: none;
    }
  }
`;
const ErrorDisplayer = styled.p`
  font-size: 10px;
  color: red;
  position: absolute;
  top: -14px;
`;

function Register() {
  const router = useRouter();
  const user = getUser();
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [profilUsaha, setProfilUsaha] = useState('');
  const [name, setName] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [kelurahandesa_id, setKelurahandesa_id] = useState(0);
  const [street, setStreet] = useState('');
  const [error, setError] = useState({
    name: null,
    phone_number: null,
    email: null,
    password: null,
    re_password: null,
    street: null,
  });
  const [re_password, setRe_password] = useState('');

  const profileUsaha = [
    { value: 'Pemilik Unit Pengolahan Ikan', label: 'Pemilik Unit Pengolahan Ikan' },
    { value: 'Pemilik Cold Storage', label: 'Pemilik Cold Storage' },
    { value: 'Trader/Supplier', label: 'Trader/Supplie' },
    { value: 'UKM Perikanan', label: 'UKM Perikanan' },
    { value: 'Investor Proyek Perikanan', label: 'Investor Proyek Perikanan' },
  ];

  const handleSelected = (ev, status) => {
    switch (status) {
      case 'province':
        _getCityList(ev.value); //catch province id
        break;
      case 'city':
        setKelurahandesa_id(ev.value);
        break;
      case 'profil-usaha':
        setProfilUsaha(ev.value);
        break;
      default:
        null;
        break;
    }
  };

  const handleInput = (e) => {
    const { name } = e.target;
    const errors = {
      name: 'Format Nama Tidak Valid',
      email: 'Format Email Tidak Valid',
      password: 'Panjang password antara 8-16',
      re_password: 'Password Tidak Sama',
      phone_number: 'No HP tidak valid',
      street: 'Alamat minimal 5 Karakter',
    };
    switch (name) {
      case 'name':
        if (!/^[a-z||\s]+$/i.test(e.target.value)) {
          setError((prevState) => ({
            ...prevState,
            [name]: errors.name,
          }));
        } else {
          setName(e.target.value);
          setError((prevState) => ({
            ...prevState,
            [name]: null,
          }));
        }
        break;
      case 'phone_number':
        if (!(/^[0-9]+$/.test(e.target.value) && e.target.value.length > 8 && e.target.value.length < 13)) {
          setError((prevState) => ({
            ...prevState,
            [name]: errors.phone_number,
          }));
        } else {
          setPhone_number(e.target.value);
          setError((prevState) => ({
            ...prevState,
            [name]: null,
          }));
        }
        break;
      case 'email':
        if (!(e.target.value.includes('@') && e.target.value.length > 5)) {
          setError((prevState) => ({
            ...prevState,
            [name]: errors.email,
          }));
        } else {
          setEmail(e.target.value);
          setError((prevState) => ({
            ...prevState,
            [name]: null,
          }));
        }
        break;
      case 'password':
        if (e.target.value.length < 8) {
          setError((prevState) => ({
            ...prevState,
            [name]: errors.password,
          }));
        } else {
          setPassword(e.target.value);
          setError((prevState) => ({
            ...prevState,
            [name]: null,
          }));
        }
        break;
      case 're_password':
        if (e.target.value !== password) {
          setError((prevState) => ({
            ...prevState,
            [name]: errors.re_password,
          }));
        } else {
          setRe_password(e.target.value);
          setError((prevState) => ({
            ...prevState,
            [name]: null,
          }));
        }
        break;
      case 'street':
        if (e.target.value.length < 5) {
          setError((prevState) => ({
            ...prevState,
            [name]: errors.street,
          }));
        } else {
          setStreet(e.target.value);
          setError((prevState) => ({
            ...prevState,
            [name]: null,
          }));
        }
        break;
      default:
        break;
    }
  };

  const _getProvinceList = () => {
    getProvinceList()
      .then(async (response) => {
        const tempProvince = await response.json();
        const provinces = [];
        // change label
        tempProvince.data.forEach((element, index) => {
          provinces[index] = { label: element.provinsi_name, value: element.provinsi_id };
        });
        setProvinceList(provinces);
      })
      .catch(function (err) {
        const error = err;
        alert(error);
        // return error
      });
  };

  const _getCityList = (id) => {
    getCityList(id)
      .then(async (response) => {
        const tempCity = await response.json();
        const cities = [];
        // change label
        tempCity.data.forEach((element, index) => {
          cities[index] = { label: element.kabupatenkota_name, value: element.kabupatenkota_id };
        });
        setCityList(cities);
      })
      .catch(function (err) {
        const error = err;
        alert(error);
        // return error
      });
  };

  const disableOrNot = () => {
    let errorCheckers = [];
    Object.entries(error).forEach(([key, value]) => {
      if (value === null) {
        errorCheckers.push(true);
      } else {
        errorCheckers.push(false);
      }
    });
    if (errorCheckers.every((errorChecker) => errorChecker === true)) return false;
    return true;
  };

  useEffect(() => {
    _getProvinceList();
    if (user) {
      router.back();
    }
  }, []);

  const firebaseRegistration = async (email, password, name) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
        });
      })
      .catch(() => alert("can't register to firebase"));
  };
  const firebaseLogin = async (token) => {
    alert('exetd');
    await auth.signInWithCustomToken(token).then(() => alert('exetd'));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = register(email, password, re_password, name, phone_number, street, kelurahandesa_id);
      const json = await (await res).json();
      if (json.header.message == '') {
        e.preventDefault();
        firebaseRegistration(email, password, name); //register firebase
        const loginRes = await login(email, password);
        const json = await loginRes.json();
        const data = await json.data;
        firebaseLogin(data.token);
        // if (data) {
        //   localStorage.setItem("token", data.token)
        // };
        alert('Registrasi berhasil!');
        router.push('/auth/cold-storage-confirmation');
      } else {
        alert(json.header.message);
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <>
      <Head>
        <title>FishLog | Register</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Layout $register>
        <div>
          <div style={{ position: 'fixed', width: '65%', height: '100vh', background: 'var(--first-color)' }}>
            <div style={{ width: '100%', position: 'relative', transform: 'translateY(-50%)', top: '50%' }}>
              <Image src="/images/auth-banner.png" width={500} height={250} alt="auth banner" layout="responsive" />
            </div>
          </div>
        </div>
        <div>
          <h1>Daftar</h1>
          <p style={{ marginBottom: '1rem' }}>
            SELAMAT DATANG di <br />
            Platform Ekosistem Rantai Pasok Perikanan <br />
            Terintegrasi di Indonesia. <br />
          </p>
          <p>
            Daftarkan Diri Anda, terhubung dengan Ekosistem FishLog, dapatkan berbagai peluang menarik di jaringan untuk
            meningkatkan pertumbuhan bisnis cold storage perikanan Anda !
          </p>
          <div style={{ position: 'relative', width: '100%', marginTop: '.8rem' }}>
            <ErrorDisplayer>{error.name}</ErrorDisplayer>
            <Input required placeholder="Nama Lengkap Anda" type="text" name="name" onChange={handleInput} />
          </div>
          <div style={{ position: 'relative', width: '100%', marginTop: '.8rem' }}>
            <ErrorDisplayer>{error.phone_number}</ErrorDisplayer>
            <Input
              required
              placeholder="Masukkan No HP"
              type="tlp"
              autoComplete="false"
              name="phone_number"
              onChange={handleInput}
            />
          </div>
          <div style={{ position: 'relative', width: '100%', marginTop: '.8rem' }}>
            <ErrorDisplayer>{error.email}</ErrorDisplayer>
            <Input required placeholder="Email" type="email" autoComplete="false" name="email" onChange={handleInput} />
          </div>
          <div style={{ position: 'relative', width: '100%', marginTop: '.8rem' }}>
            <ErrorDisplayer>{error.password}</ErrorDisplayer>
            <Input
              required
              placeholder="Masukkan Password"
              type="password"
              name="password"
              autoComplete="false"
              onChange={handleInput}
            />
          </div>
          <div style={{ position: 'relative', width: '100%', marginTop: '.8rem' }}>
            <ErrorDisplayer>{error.re_password}</ErrorDisplayer>
            <Input
              required
              placeholder="Ulangi Password"
              type="password"
              autoComplete="false"
              onChange={handleInput}
              name="re_password"
            />
          </div>
          <CustomSelect
            placeholder="Masukkan Provinsi Domisili Anda"
            options={provinceList}
            onChange={(ev) => {
              handleSelected(ev, 'province');
            }}
            autoFocus={true}
          ></CustomSelect>
          <CustomSelect
            placeholder="Masukkan Kota Domisili Anda"
            options={cityList}
            onChange={(ev) => {
              handleSelected(ev, 'city');
            }}
            autoFocus={true}
          ></CustomSelect>
          <CustomSelect
            placeholder="Profil Usaha"
            options={profileUsaha}
            onChange={(ev) => {
              handleSelected(ev, 'profil-usaha');
            }}
            autoFocus={true}
          ></CustomSelect>
          <div style={{ position: 'relative', width: '100%', marginTop: '.8rem' }}>
            <ErrorDisplayer>{error.street}</ErrorDisplayer>
            <Input required placeholder="Alamat lengkap" type="textarea" name="street" onChange={handleInput} />
          </div>
          <Input
            required
            value="Daftar"
            type="submit"
            $masuk="var(--first-color)"
            style={{ marginTop: '1rem' }}
            disabled={disableOrNot()}
            onClick={submitHandler}
          />
        </div>
      </Layout>
    </>
  );
}

export default Register;
