import styled, { css } from 'styled-components';

const BaseButton = css`
  background-color: var(--second-color);
  ${({ width }) => (width ? `width:${width}` : '')};
  cursor: pointer;
`;

export const StyledLink = styled.a`
  ${BaseButton}
  cursor: pointer;
  padding: .5rem 1rem;
  font-family: 'Poppins Bold';
  color: white;
  border-radius: 30px;
  margin-top: 1rem;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

export const Submit = styled.button`
  ${BaseButton}
  width:100%;
  padding:.5rem 1rem;
  border-radius: 30px;
  margin-bottom: 5rem;
  border: none;
  color: white;
  grid-area: submit;
  justify-self: center;
  font-size: 1.22rem;
  font-family:"Poppins Bold";
`;
