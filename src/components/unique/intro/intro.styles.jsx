import styled from 'styled-components';
import { Container } from '../../navbar/navbar.styles';

export const Text = styled.p`
  text-align: justify;
  ${({ center }) => (center ? `text-align:center` : '')}
  strong {
    font-family: 'Poppins Bold';
  }
  font-size: 1rem;
  line-height: 20pt;

  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`;
export const IntroContainer = styled(Container)`
  ${({ smaller }) => (smaller ? `height:200px` : `height:400px`)};
  h4 {
    line-height: 33px;
  }
  img {
    border-radius: 5px;
  }
  @media only screen and (max-width: 600px) {
    height: 100%;
    margin-top: 1rem;
    width: calc(100% - 30px);
  }
  & > div {
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  ${({ $child }) => ($child ? 'width:100%!important' : '')};
`;
