import styled, { css } from 'styled-components';

export const ComparisonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  ${({ coldStorage }) =>
    coldStorage &&
    css`
       display:grid;
       grid-template-columns:2fr 2fr 1fr;
       justify-items: baseline;
    `}
  min-width:700px;
  h4:nth-child(1) {
    margin-right: 1rem;
    font-style: italic;
    ${({ coldStorage }) => (coldStorage ? 'font-style:normal' : '')};
    @media only screen and(max-width:640px) {
      font-size: 1rem;
    }
  }
  h4:nth-child(2),
  h4:nth-child(3),
  h4:nth-child(4) {
    font-size: 1.3rem;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    ${({ coldStorage }) =>
      coldStorage &&
      css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 30px;
      `}
  }
  h4:nth-child(2) {
    background-color: #c4c4c4;
    color: #828282;
    ${({ coldStorage }) =>
      coldStorage &&
      css`
        background-color: var(--first-color);
        color: white;
      `}
  }
  h4:nth-child(3) {
    background-color: var(--first-color);
    color: #ebf4f8;
    ${({ coldStorage }) =>
      coldStorage &&
      css`
        background-color: var(--second-color);
        color: white;
      `}
  }
  h4:nth-child(4) {
    background-color: var(--second-color);
    color: #ebf4f8;
  }
`;
export const ComparisonBody = styled.div`
  min-width: 700px;
  h5 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    span {
      font-size: 0.8rem;
    }
  }
  ${({ coldStorage }) =>
    coldStorage &&
    css`
      margin-top: 1rem;
      p {
        font-size: 1rem;
        margin-top: 0.5rem;
      }
    `};
  .feature {
    ${({ coldStorage }) =>
      coldStorage &&
      css`
       display:grid;
       grid-template-columns:1fr 1fr 1fr;
       div:nth-child(2){
         justify-self:center;
       }
        div:nth-child(3){
         justify-self:center;
       }
      `};
    table {
      table-layout: auto;
      width: 100%;
      td:nth-child(1) {
        width: 25%;
      }
      td:nth-child(2),
      td:nth-child(3),
      td:nth-child(4) {
        width: calc(100% / 3);
        display: inline-flex;
        justify-content: center;
      }
      td:nth-child(3) {
        fill: var(--first-color);
      }
      td:nth-child(4) {
        fill: var(--second-color);
      }
    }
    h6 {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.75);
    }
  }
`;
export const TrialFeature = styled.td`
  color: gray;
`;
export const CustomFeature = styled.td`
  font-weight: 600;
`;
