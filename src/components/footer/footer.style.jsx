import styled from 'styled-components';
import { StyledLink } from '../form-slicing/button.styles';

export const FooterContainer = styled.footer`
  background-color: #f3f3f3;
  a,
  img,
  svg {
    cursor: pointer;
    color: #616161;
    fill: #616161;
    transition: color 0.2s ease-in;
    font-style: normal;
  }
  a:hover,
  address:hover,
  img:hover {
    color: var(--second-color);
  }
  p,
  hr {
    color: #616161;
  }
  h4 {
    line-height: 30px;
    color: #616161;
  }
`;
export const GridFooter = styled.div`
  display: grid;
  h4 {
    font-size: 1rem;
    font-family: 'Poppins Bold';
  }
  width: 73%;
  @media only screen and (max-width: 600px) {
  }
  margin: 1rem auto;
  ${({ $login }) => $login && 'margin-top:0'};
  grid-template-areas:
    'img img img'
    'title-company title-product title-addres'
    'content1-company content1-product content1-addres'
    'content2-company content2-product content2-addres'
    'content3-company content3-product content3-addres'
    'content3-company content4-product content4-addres';
  align-items: center;
  column-gap: 5%;
  row-gap: 0.8em;
  padding: 2rem 0;
  @media only screen and (max-width: 600px) {
    grid-template-areas:
      'img img'
      'title-addres title-addres'
      'content1-addres content2-addres'
      'content3-addres content3-addres'
      'content4-addres content4-addres'
      'title-company  title-product'
      'content1-company content1-product'
      'content2-company content2-product'
      'content3-company content3-product'
      'content3-company content4-product';
    column-gap: 0;
    justify-items: center;
    row-gap: 0.5rem;
    h4 {
      font-size: 0.8rem;
      line-height: 20px;
    }
    a {
      font-size: 0.6rem;
      line-height: 10px;
    }
  }
  .logo {
    grid-area: img;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 33%;
    @media only screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    div {
      width: 80px;
      grid-column: 3;
    }
  }
  .title-company {
    @media only screen and (max-width: 600px) {
      margin-top: 0.5rem;
      justify-self: start;
    }
    grid-area: title-company;
  }
  .content1-company {
    @media only screen and (max-width: 600px) {
      justify-self: start;
    }
    grid-area: content1-company;
  }
  .content2-company {
    @media only screen and (max-width: 600px) {
      justify-self: start;
    }
    grid-area: content2-company;
  }
  .content3-company {
    @media only screen and (max-width: 600px) {
      justify-self: start;
      width: 70%;
    }
    grid-area: content3-company;
  }

  .title-product {
    @media only screen and (max-width: 600px) {
      margin-top: 0.5rem;
      justify-self: start;
    }
    grid-area: title-product;
  }
  .content1-product {
    @media only screen and (max-width: 600px) {
      justify-self: start;
    }
    grid-area: content1-product;
  }
  .content2-product {
    @media only screen and (max-width: 600px) {
      justify-self: start;
    }
    grid-area: content2-product;
  }
  .content3-product {
    @media only screen and (max-width: 600px) {
      justify-self: start;
    }
    grid-area: content3-product;
  }
  .content4-product {
    @media only screen and (max-width: 600px) {
      justify-self: start;
    }
    grid-area: content4-product;
  }
  .title-addres {
    grid-area: title-addres;
  }
  .content1-addres {
    grid-area: content1-addres;
  }
  .content2-addres {
    grid-area: content2-addres;
  }
  .content3-addres {
    grid-area: content3-addres;
  }
  .content4-addres {
    grid-area: content4-addres;
  }
`;
export const FooterStyledLink = styled(StyledLink)`
  display: block;
  font-weight: normal;
  border: 2px solid white;
  padding: 0.5rem 1rem;
  margin: 0;
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    padding: 0.5rem;
  }
  .upper {
    color: white;
    font-family: 'Poppins Bold';
  }
  .lower {
    color: black;
    font-size: 0.8rem;
    font-style: italic;
    font-family: 'Poppins Bold';
    @media only screen and (max-width: 600px) {
      font-size: 0.5rem;
    }
  }
  &:hover {
    color: var(--first-color) !important;
  }
`;
