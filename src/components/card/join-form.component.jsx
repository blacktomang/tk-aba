import React from 'react'
import { Submit } from '../form-slicing/button.styles'
import { StyledInput } from '../form-slicing/input.styles'
import { ContainerExtends, FormGrid } from './card.styles'

function JoinForm() {
  return (
    <ContainerExtends  margin="0 auto">
      <FormGrid action="">
        <StyledInput placeholder="Nama Lengkap" type="text"/>
        <StyledInput  placeholder="Nomor HP*" type="tel"/>
        <StyledInput  placeholder="Kategori Mitra (Nelayan / CS / UKM)" type="text"/>
        <StyledInput  placeholder="Kota / Kabupaten" type="text"/>
        <StyledInput placeholder="Isi pesan" type="textarea" />
        <Submit>Submit</Submit>        
      </FormGrid>
    </ContainerExtends>
  )
}

export default JoinForm
