import styled, { css } from 'styled-components';
import { StyledLink } from '../form-slicing/button.styles';
import { Container } from '../navbar/navbar.styles';

export const FlexibleContainer = styled(Container)`
  ${({ $width }) => ($width ? 'width:100%' : 'width:60%')};
  margin-left: 2rem;
  ${({ $primary }) => ($primary ? 'color:var(--first-color)' : '')};
  ${({ $noMargin }) => ($noMargin ? 'margin-left:0' : '')};
  strong {
    font-family: 'Poppins Bold';
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 1rem;
    margin-left: 0;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const ItemContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-height: 100%;
  width: 73%;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
  li {
    display: flex;
    align-items: center;
    margin: 1rem;
    p {
      margin-left: 0.5rem;
      font-weight: bold;
    }
  }
  @media only screen and (max-width: 600px) {
    li {
      margin: 1rem 0;
    }
  }
`;
export const CardContainer = styled(Container)`
  h4 {
    font-size: 1.25rem;
  }
  ${({ $center }) =>
    $center &&
    css`
      h1,
      h4,
      p {
        text-align: center;
        @media only screen and (max-width: 600px) {
          line-height: 25px;
        }
      }
      h4 {
        line-height: 25pt;
      }
      p {
        color: #616161;
      }
    `}
  ${({ gap }) => (gap ? `gap:${gap}` : '')};
  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
    margin-top: 1.5rem;
  }
`;

export const CardPartnership = styled.div`
  display: grid;
  cursor: pointer;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 20px;
  background-color: #eaf2ff;
  box-shadow: 0px 1px 3px #888;
  transition: all 0.2s ease-in;
  &:hover {
    /* opacity: 0.8; */
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 10%);
  }

  grid-template-areas:
    'header header'
    'header header'
    'title title'
    'desc desc'
    'body body'
    'body body'
    'body body'
    'body body';
  justify-items: center;
  align-items: center;

  .headerCard {
    grid-area: header;
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    top: 0;
  }
  .title {
    grid-area: title;
    font-family: 'Poppins Bold';
    text-align: center;
    color: #616161;
    font-size: 17px;
    line-height: 22px;
    padding: 0.5rem 2.5rem;
    margin-top: 1rem;
  }
  h4 {
    font-size: 0.852rem;
    line-height: 20px;
  }
  p {
    font-size: 0.7rem;
  }
  .desc {
    grid-area: desc;
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  ${({ width }) => (width ? `width:${width}` : ``)};
  @media only screen and (max-width: 600px) {
    width: 100%;
    h2,
    h4 {
      font-size: 0.752rem;
      line-height: 20px;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

export const CardBody = styled.div`
  grid-area: body;
  display: grid;
  grid-template-areas:
    'pembiayaan  distribusi'
    'pembiayaan  distribusi'
    'jangkawaktu profit'
    'jangkawaktu profit'
    'action action';
  margin-bottom: 1rem;
  h4 {
    color: #254f9c;
    font-family: 'Poppins Bold';
  }
  p {
    color: #616161;
  }
  .pembiayaan {
    text-align: center;
    grid-area: pembiayaan;
    padding: 10px 7px;
    border-right: 1px solid #caddff;
    border-bottom: 1px solid #caddff;
    p {
      line-height: 15px;
    }
    @media only screen and (max-width: 600px) {
      width: 125px;
    }
  }
  .distribusi {
    text-align: center;
    grid-area: distribusi;
    padding: 10px 7px;
    border-bottom: 1px solid #caddff;
    p {
      line-height: 15px;
    }
    @media only screen and (max-width: 600px) {
      width: 125px;
    }
  }
  .jangkawaktu {
    text-align: center;
    grid-area: jangkawaktu;
    padding: 10px 7px;
    border-right: 1px solid #caddff;
    p {
      line-height: 15px;
    }

    @media only screen and (max-width: 600px) {
      width: 125px;
    }
  }
  .profit {
    text-align: center;
    padding: 10px 7px;
    grid-area: profit;
    p {
      line-height: 15px;
    }

    @media only screen and (max-width: 600px) {
      width: 125px;
    }
  }
  .action {
    grid-area: action;
    text-align: center;
    margin-top: 1rem;
  }
`;
export const Action = styled(StyledLink)`
  padding: 0.5rem 1rem !important;
  font-weight: bold;
  font-family: 'Poppins Medium';
  font-size: 0.85rem;
  ${({ label }) =>
    label === 'Funded' &&
    css`
      opacity: 0.7;
      &:hover {
        opacity: 0.5;
      }
    `};
`;
export const Label = styled.p`
  font-weight: 700;
  ${({ label }) => {
    let bg;
    switch (label.toLowerCase()) {
      case 'funded':
        bg = 'background-color: var(--first-color)';
        break;
      case 'fundraising':
        bg = 'background-color: var(--second-color)';
        break;
      case 'coming soon':
        bg = 'background-color: rgb(78, 158, 0)';
        break;
    }
    return bg;
  }};
  position: absolute;
  color: white !important;
  top: 15px;
  font-family: 'Poppins Bold';
  left: 0;
  font-size: 1rem !important;
  padding: 0.5rem 1rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const FormGrid = styled.form`
  display: grid;
  grid-template-areas: 'nama nama nomor nomor' 'kota kota mitra mitra' 'pesan pesan pesan pesan' 'submit submit submit submit';
  gap: 1rem;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AppCardContainer = styled.div`
  margin-top: 1rem;
  @media only screen and (max-width: 600px) {
    margin-top: 3rem;
  }
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: var(--first-color);
  padding: 3rem 1.5rem;
  border-radius: 30px;
  color: white;
  .left {
    width: 50%;
    font-size: 2rem;
    line-height: 55px;
  }
  .right {
    width: 50%;
  }
  .button {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 3rem;
    .left {
      width: 100%;
      font-size: 1.5rem;
      line-height: 25px;
    }
    .right {
      width: 100%;
    }
  }
`;
export const Try = styled.a`
  padding: 1rem;
  background-color: white;
  color: var(--first-color) !important;
  border-radius: 10px;
  font-size: large;
  font-style: italic;
`;
export const Demo = styled(Try)`
  color: white !important;
  border: 1px solid white;
  background-color: var(--first-color);
  @media only screen and (max-width: 995px) {
    margin-top: 1rem;
  }
`;

export const Product = styled.h4`
  color: white !important;
  border-radius: 20px;
  padding-bottom: 2rem;
  font-size: 17px !important;
  font-family: 'Poppins Medium';
  position: absolute;
  right: 20%;
  top: 30%;
  z-index: 2;
  background-color: var(--first-color);
  padding: 0.5rem 2rem;
`;

export const ContainerExtends = styled(Container)`
  width: 75%;
  @media only screen and (max-width: 600px) {
    width: calc(100% - 30px);
  }
`;
