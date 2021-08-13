import React from 'react'
import { FormContainer } from './auth.styles'
import InputAuthField from './slicing/input.component'

function ForgotPassword() {
  return (
    <>
      <FormContainer>
      <h4>Reset Kata Sandi</h4>
      <div style={{width:"100%"}}>
        <InputAuthField label="Email" name="name" type="text" />
        <InputAuthField name="submit" type="submit" value="Reset" />
      </div>
    </FormContainer>      
    </>
  )
}

export default ForgotPassword
