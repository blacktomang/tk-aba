import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  width: 450px;
  padding: 1.5rem 2.8rem;
  border-radius: 20px;
  margin: 0 auto;
  h4 {
    line-height: 26px;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1rem !important;
    text-align: right;
    color: var(--first-color) !important;
    cursor: pointer;
  }
`;

export const LoginChoiceTitle = styled.p`
  margin-top: 1rem !important;
  position: relative;
  font-family: 'Poppins Medium';
  color: rgba(0, 0, 0, 0.8) !important;
  text-align: center !important;
  &::before {
    content: '';
    display: block;
    height: 1px;
    width: 3rem;
    background-color: black;
    position: absolute;
    top: 50%;
  }
  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 3rem;
    background-color: black;
    position: absolute;
    top: 50%;
    right: 0;
  }
`;
export const LoginChoice = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  margin: 1rem 0;
  box-shadow: 0px 4px 8px 0px #dde2ec;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  font-family: 'Poppins Medium';
  color: var(--first-color);
  fill: var(--first-color);
  padding: 0.5rem 0;
`;
export const ToRegister = styled.div`
  font-family: 'Poppins Medium';
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  a {
    font-style: italic;
    font-family: 'Poppins Bold';
    color: var(--first-color);
  }
`;
export const Layout = styled.div`
  display: flex;
  h1,
  h2,
  h3,
  h4 {
    color: var(--first-color);
  }
  & > div {
    height: 100vh;
    display: flex;
    align-items: center;
  }
  & > div:nth-child(1) {
    width: 65%;
    background-color: var(--first-color);
    ${({ $register }) => ($register ? 'position:relative' : '')};
  }
  & > div:nth-child(2) {
    width: 35%;
    display: flex;
    ${({ $register }) => ($register ? 'margin:4rem 0' : '')};
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 30px;
    ${({ $register }) => ($register ? 'height:100%' : '')};
    h1 {
      color: var(--first-color);
      text-align: left;
    }
  }
`;
