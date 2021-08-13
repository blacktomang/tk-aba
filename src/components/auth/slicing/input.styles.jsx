import styled from "styled-components";

export const AuthInputContainer = styled.div`
position: relative;
width:100%;
border-bottom: 1px solid #616161;
margin:2.5rem 0;
font-family:"Poppins";
label{
  position: absolute; 
  left: 0;
  transition:all .3s ease;
  text-transform:uppercase;
  color:rgba(0,0,0,.5);
  cursor:text;
}

 input{
  border: none;
  outline: none;
  background:none;
  font-size:medium;
}
input:invalid{
  box-shadow:none;
}

input:focus div input:valid + label,
input:valid + label{
  transform: translateY(-26px);
 color:rgba(0,0,0,.8);
 font-size:smaller;
}
`

export const Submit = styled.input`
background-color:var(--first-color);
cursor: pointer;
border-radius:5px;
outline:none;
border:none;
padding:.5rem;
width:100%;
color:white;
font-family:"Poppins Bold";
`