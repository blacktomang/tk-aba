// import ResetPassword from 'pages/auth/reset-password';

import axios from 'axios';

// DATA API
const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const REGISTER = process.env.NEXT_PUBLIC_REGISTER;
const LOGIN = process.env.NEXT_PUBLIC_LOGIN;
const FORGOT_PASSWORD = process.env.NEXT_PUBLIC_FORGOT_PASSWORD;
const RESET_PASSWORD = process.env.NEXT_PUBLIC_RESET_PASSWORD;
const USER_DETAIL = process.env.NEXT_PUBLIC_USER_DETAIL;
const HEADER = { 'Content-Type': 'application/json', Accept: 'application/json' };

// Please write your code clearly.
export async function login(email, password) {
  const res = await fetch(BASE_URL + LOGIN, {
    method: 'POST',
    HEADER,
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return res;
}

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

export async function register(email, password, re_password, name, phone_number, street, kelurahandesa_id) {
  const res = await fetch(BASE_URL + REGISTER, {
    method: 'POST',
    HEADER,
    body: JSON.stringify({
      email,
      password,
      re_password,
      name,
      phone_number,
      street,
      kelurahandesa_id,
    }),
  });
  return res;
}

export async function forgot_password(email) {
  const res = await fetch(BASE_URL + FORGOT_PASSWORD, {
    method: 'POST',
    HEADER,
    body: JSON.stringify({
      email,
    }),
  });
  return res;
}

export async function reset_password(user_id, token, password, re_password) {
  const res = await fetch(BASE_URL + RESET_PASSWORD, {
    method: 'POST',
    HEADER,
    body: JSON.stringify({
      user_id,
      token,
      password,
      re_password,
    }),
  });
  return res;
}

// export async function user_detail(user_id) {
//   const res = await fetch(BASE_URL + USER_DETAIL + "/" + user_id, {
//     method: 'GET',
//     HEADER,
//   });
//   return res;
// }
