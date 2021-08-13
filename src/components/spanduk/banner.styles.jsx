import styled, { css } from 'styled-components';
import { Container } from '../navbar/navbar.styles';

export const SingleHeading = styled.h4`
  width: 70%;
`;

export const LowerHeading = styled.h3`
  font-weight: normal;
  text-align: center;
  font-size: 1.32rem;
  color: white !important;
  @media only screen and (max-width: 520px) {
    font-size: 3vw;
  }
`;

export const UpperHeading = styled.h4`
  font-weight: 700;
  color: var(--second-color) !important;
  text-align: center;
  @media only screen and (max-width: 520px) {
    font-size: 1vw;
  }
`;
export const BannerContainer = styled.div`
  ${({ height }) => (height ? `height:${height}` : '')};
  ${({ $middle }) =>
    $middle &&
    css`
      @media only screen and (max-width: 600px) {
        height: 15vh;
      }
    `}
  ${({ $specific }) =>
    $specific &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${'' /* height: 80%; */}
    `}
  background-color: var(--first-color);
  h1,
  h4,
  h3,
  h4,
  h5,
  p {
    ${({ white }) => (white ? 'color:white' : '')};
    ${({ normal }) =>
      normal &&
      css`
        font-weight: 400;
        text-align: center;
        line-height: 40px;
      `};
  }

  p {
    font-size: 14pt;
    width: 100%;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  ${({ $about }) =>
    $about &&
    css`
      p {
        font-family: 'Poppins Bold';
      }
    `}
  @media only screen and (max-width:600px) {
    h4 {
      font-size: 1rem;
      width: 100%;
      line-height: 4vh;
    }
    p {
      font-size: 0.95rem;
      width: 100%;
      line-height: 4vh;
    }
  }
`;

export const BannerImage = styled.div`
  width: 35%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const BannerContainerExtends = styled(Container)`
  @media only screen and (max-width: 600px) {
    height: 45vh;
    width: calc(100% - 30px) !important;
  }
`;
export const DetailProduct = styled.div`
  display: flex;
  position: relative;
  background-color: none;
  h6 {
    position: absolute;
    background-color: var(--second-color);
    color: white;
    padding: 0 1rem;
    bottom: 50px;
    letter-spacing: 1px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    @media only screen and (max-width: 600px) {
      bottom: 20px;
    }
  }
`;

export const ControleWidth = styled.div`
  width: 50%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
