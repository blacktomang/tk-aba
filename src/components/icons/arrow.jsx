import React from 'react';
import styled from 'styled-components';

function Arrow({ $dropDown,size }) {
  return (
    <>
      <ArrorManipulate
        $dropDown={$dropDown}
        xmlns="http://www.w3.org/2000/svg"
        width={size?size:"24"}
        height={size?size:"24"}
        viewBox="0 0 24 24"
      >
        <path d="M16.939 7.939L12 12.879 7.061 7.939 4.939 10.061 12 17.121 19.061 10.061z" />
      </ArrorManipulate>
    </>
  );
}

export default Arrow;

const ArrorManipulate = styled.svg`
outline:0;
user-select: none;-webkit-touch-callout:none;
  width: 15px;
  transform: rotate(-90deg);
  transition: all 0.2s ease-in;
  @media only screen and (max-width: 800px) {
    transition: transform 0.2s ease-in-out;
    width: 100px;
  }
`;
