import styled, { css } from "styled-components";

const BaseInput = css`
border-radius: 14px;
border: 3px solid #ACACAC;
padding: 1rem;
font-size:1.32rem;
`
export const StyledInput = styled.input`
${BaseInput}
@media only screen and (max-width:600px){
  font-size:0.7rem;
}
outline:none;
&:focus{
  border-color:var(--first-color);
  box-shadow:0 0 0 1px var(--first-color);
}
&::placeholder{
font-style:italic;
}
&:nth-child(1){
grid-area:nama;
}
&:nth-child(2){
grid-area:nomor;
}
&:nth-child(3){
grid-area:mitra;
}
&:nth-child(4){
grid-area:kota;
}
&:nth-child(5){
  padding:2.5rem 1rem;
grid-area:pesan;
}
`