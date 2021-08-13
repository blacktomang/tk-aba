import styled, { css } from 'styled-components';
import { Container } from '../navbar/navbar.styles';

export const SectionContainer = styled.section`
  padding: 2rem 0;
  ${({ textAlign }) => (textAlign ? `text-align:${textAlign}` : '')};
  h2 {
    color: var(--first-color);
    padding-bottom: 2rem;
    ${({ maxWidth }) => (maxWidth ? `max-width:${maxWidth}` : '')}
    @media only screen and (max-width: 600px) {
      font-size: 1.852rem;
      line-height: 5vh;
      padding-bottom: 0;
    }
  }
`;

export const ExtendsContainer = styled(Container)`
  ${({ $specific }) =>
    $specific &&
    css`
      justify-content: space-between;
    `}
  @media only screen and (max-width: 600px) {
    width: calc(100% - 30px);
  }
`;

export const AdditionText = styled.p`
  text-align: center;
  color: black !important;
`;
export const PureH1 = styled.h2`
  ${({ textAlign }) => (textAlign ? `text-align:${textAlign}` : '')};
`;
export const SubTitleStyled = styled.h2`
  color: var(--first-color);
  font-size: 1.25rem;
`;
export const Goal = styled.h3`
  margin-top: 1rem;
  text-align: center;
  font-size: 4rem;
  span {
    color: white;
    background-color: var(--second-color);
    padding: 0 1rem;
    margin-right: 0.5rem;
    letter-spacing: 2px;
    font-weight: bolder;
  }
  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;
