import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ background }) => (background ? `background-color:${background}` : '')};
  ${({ navContainer }) =>
    navContainer &&
    css`
      background-color: white;
      position: relative;
      top: 0;
      left: 0;
      z-index: 999;
      transition: position 0.5s ease-in-out;
      box-shadow: 0px 1px 3px #888;
      position: sticky;
    `};
  ${({ nav }) =>
    nav &&
    css`
      -webkit-tap-highlight-color: transparent;

      @media only screen and (max-width: 600px) {
        height: 4rem;
        width: calc(100% - 30px);
      }
    `}
  ${({ zIndex }) => (zIndex ? `z-index:${zIndex}` : '')};
  ${({ margin }) => (margin ? `margin:${margin}` : '')};
  ${({ padding }) => (padding ? `padding:${padding}` : '')};
  ${({ display }) => (display ? `display:${display}` : '')};
  ${({ flexBasis }) => (flexBasis ? `flex-basis:${flexBasis}` : '')};
  ${({ justifyContent }) => (justifyContent ? `justify-content:${justifyContent}` : '')};
  ${({ gap }) => (gap ? `gap:${gap}` : '')};
  ${({ rowGap }) => (rowGap ? `row-gap:${rowGap}` : '')};
  ${({ alignItems }) => (alignItems ? `align-items:${alignItems}` : '')};
  ${({ flexDirection }) => (flexDirection ? `flex-direction:${flexDirection}` : '')};
  ${({ textAlign }) => (textAlign ? `text-align:${textAlign}` : '')};
  flex-wrap: wrap;
  ${({ primary }) => (primary ? 'color:var(--first-color)' : '')};
  ${({ height }) => (height ? `height:${height}` : '')};
  ${({ width }) => (width ? `width:${width}` : '')};
  ${({ zigzag }) =>
    zigzag &&
    css`
      &:nth-child(odd) {
        flex-direction: row-reverse;
        text-align: right;
        div {
          margin-right: 2rem;
          margin-left: 0;
          a {
            align-self: end;
          }
        }
        @media only screen and (max-width: 600px) {
          justify-content: center;
          margin-left: 0;
          text-align: center;
          div {
            margin-right: 0;
            a {
              align-self: center;
              font-size: 1rem;
            }
          }
        }
      }
      &:nth-child(even) {
        flex-direction: row;
        div {
          margin-left: 2rem;
        }
        @media only screen and (max-width: 600px) {
          justify-content: center;
          margin-right: 0;
          div {
            margin-left: 0;
            a {
              align-self: center;
              font-size: 1rem;
            }
          }
        }
      }

      @media only screen and (max-width: 600px) {
        text-align: center;
      }
    `};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  strong,
  p {
    color: inherit;
  }
  .imageController {
    width: 30%;
    ${({ zigzag }) => (zigzag ? 'width:20%' : '')};
    @media only screen and (max-width: 600px) {
      width: 70%;
    }
  }
  ${({ journey }) =>
    journey &&
    css`
      .imageController {
        width: 30%;
        border-radius: 5px;
        overflow: hidden;
      }
    `}
  ${({ $about }) =>
    $about &&
    css`
      font-family: 'Poppins Medium';
      color: var(--second-color);
      h1,
      h5 {
        color: white;
        width: 100%;
      }
      .contenP {
        color: var(--first-color);
        font-weight: normal;
      }

      .imageController {
        width: 30%;
        border-radius: 5px;
        overflow: hidden;
      }
      @media only screen and (max-width: 600px) {
        justify-content: center;
        & > .imageController {
          width: 80%;
        }
      }
    `};
  ${({ fill }) =>
    fill &&
    css`
      & svg {
        fill: ${fill};
        height: 30px;
        width: 30px;
        cursor: pointer;
        transition: fill 0.3s ease-in;
        &:hover {
          fill: var(--second-color);
        }
      }
    `}
  h1 {
    @media only screen and (max-width: 600px) {
      font-size: 1.52rem;
      line-height: 5vh;
    }
  }
  p {
    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
  ${({ $specific }) => ($specific ? 'flex-direction:row-reverse' : '')};
`;

export const ImageController = styled.div`
  width: 20%;
  @media only screen and (max-width: 500px) {
    width: 30%;
  }
`;

export const NavItemContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: calc(100% - 30px);
    margin: 0 auto;
    height: 30%;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  & > hr {
    display: none;
  }
  ${({ $login }) =>
    $login &&
    css`
      text-align: center;
      padding: 0.3rem 1rem;
      cursor: pointer;
      border-radius: 20px;
      border: 2px solid var(--first-color);
      color: var(--first-color) !important;
      @media only screen and (max-width: 600px) {
        border: 2px solid var(--second-color);
      }
    `}
  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 0.5rem 0;
    & > hr {
      display: block;
    }
  }
`;

const heighAnimation = keyframes`
  from {
    transform:translateX(-1000px);
  }

  to {
    transform:translateX(0);
  }
`;

export const LogoName = styled.p`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const Nav = styled.nav`
  width: 65%;
  position: relative;

  @media only screen and (max-width: 800px) {
    ${({ $display }) => ($display ? 'display:block' : 'display:none')};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 4rem;
    left: 0;
    background-color: var(--first-color);
    animation: ${heighAnimation} 0.3s ease-in-out;
  }
`;

export const StyledLink = styled.div`
  font-size: 1.05em;
  ${({ display }) => (display ? `display:${display}` : '')}
  ${({ $dropdown }) => ($dropdown ? `position:relative` : '')};
  ${({ small }) => (small ? `font-size:.9em` : '')};
  & div:active,
  & svg:focus {
    outline: 0;
  }
  padding: 0.5rem 0;
  color: rgba(43, 43, 43, 0.85);
  fill: rgba(43, 43, 43, 0.85);
  ${({ $login }) =>
    $login &&
    css`
      padding: 0;
    `}
  font-family: "Poppins Medium";
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    & ul {
      display: flex;
    }
    color: var(--second-color);
    fill: var(--second-color);
    svg {
      transform: rotate(0);
    }
  }
  @media only screen and (max-width: 800px) {
    color: white;
    fill: white;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    align-items: center;
    svg {
      transform: rotate(-90deg) !important;
    }
    svg:hover {
      transform: rotate(-90deg);
    }
  }
  &.active {
    color: var(--second-color);
    fill: var(--second-color);
  }
`;
export const DropdownItem = styled.ul`
  position: absolute;
  display: flex;
  width: 202px;
  display: none;
  flex-direction: column;
  top: 2rem;
  font-size: 1em !important;
  left: 11em;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0.68rem;
  transition: all 0.3s ease-in;
  z-index: 99;
  hr {
    display: none;
  }
  &:hover {
    display: flex;
  }
  background-color: white;
  box-shadow: 3px 4px 3px var(--first-color);
  @media only screen and (max-width: 800px) {
    position: fixed;
    top: 4rem;
    left: 0;
    transform: translateX(-100vw);
    background-color: rgba(000, 000, 000);
    ${({ $dropdown }) => ($dropdown ? 'transform: translateX(0)' : '')};
    height: 100vh;
    width: 100vw;
    hr {
      display: block;
    }
  }
`;
export const BackTrigger = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
    svg {
      transform: rotate(90deg) !important;
    }
  }
`;
