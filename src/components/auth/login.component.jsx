import React from 'react'
import InputAuthField from './slicing/input.component'
import { FormContainer, LoginChoiceTitle, LoginChoice, ToRegister } from './auth.styles'
import FacebookIcon from '../icons/fb'
import GoogleColor from '../icons/googleWithColot.component'
import Link from 'next/link'

function Login() {
  return (
    <FormContainer>
      <h4>Masuk</h4>
      <div style={{width:"100%"}}>
        <InputAuthField label="Email" name="name" type="text" />
        <InputAuthField label="Password / Kata Sandi" name="password" type="password" />
        <InputAuthField name="submit" type="submit" value="Masuk" />
        <Link href="reset"><p>Lupa Sandi</p></Link>
        <LoginChoiceTitle>Atau masuk dengan</LoginChoiceTitle>
        <LoginChoice> <GoogleColor/> Masuk dengan Google</LoginChoice>
        <LoginChoice> <FacebookIcon /> Masuk dengan Facebook</LoginChoice>
      </div>
      <ToRegister>Belum Punya Akun? <Link href="/daftar">Daftar</Link></ToRegister>
    </FormContainer>
  )
}

export default Login
