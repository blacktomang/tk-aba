import styled from "styled-components";
import { Container } from "../navbar/navbar.styles";

export const ReviewCardContainer = styled(Container)`
@media only screen and (max-width:800px){
  flex-direction:column;
  gap:15px;
  margin-top: 1rem;
}
`
export const ReviewCard = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content:center;
`;
export const RevieText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: .852rem;
  height: 80px;
  p{
    line-height:3vh;
    font-size:.85rem;
  }
  h6{
    font-size:1rem;
  }
`;
