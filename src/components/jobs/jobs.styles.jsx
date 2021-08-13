import styled from "styled-components";
import { StyledLink } from "../form-slicing/button.styles";
import { Container } from "../navbar/navbar.styles";

export const JobsContainer = styled(Container)`
gap:10px;
.bold{
  font-family:"Poppins Bold";
}
& > a{
flex-basis:33%;
}
@media only screen and (max-width:600px){
  flex-direction:column;
  ${({ career }) => career ? 'width:80%' : ''};
  margin: 0 auto;
}
`
export const JobTitle = styled.h2`
font-size:2rem;
`
export const ProgramIntro = styled.p`
margin-top:1rem;
strong{
 font-family:"Poppins Bold";
 padding-right:.5rem;
}
`
export const Requirements = styled.ul`
margin-top: 1rem;
p{
  font-family:"Poppins Bold";
}
li{
  font-size:1.25rem;
}
`

export const EmailUs = styled(StyledLink)`
display:inline-block;
margin-top:1rem;
`
export const PositionCard = styled(StyledLink)`
background-color:var(--first-color)!important;
`