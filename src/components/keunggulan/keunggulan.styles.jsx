import styled from 'styled-components';
import { Container } from '../navbar/navbar.styles';

export const KeunggulanContainer = styled(Container)`
  h6 {
    font-size: 15pt;
  }
  p {
    line-height: 20px;
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
    text-align: center;
    margin-top: 1rem;
    p {
      line-height: 20px;
      width: 100%;
    }
  }
`;
