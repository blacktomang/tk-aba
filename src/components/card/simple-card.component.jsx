import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '../navbar/navbar.styles';

function SimpleCard({ direction, desc, image, imageSize, headingWidth,nomarginTop }) {
  return (
    <>
      <ExtendsContainerSCard
        display="flex"
        flexDirection={direction}
        width={direction === 'column' ? '100px' : ''}
        alignItems="center"
        primary
        $margin={nomarginTop}
      >
        <Image src={image} width={imageSize ? imageSize : 40} height={imageSize ? imageSize : 40} layout="fixed" />
        <SpecialLineHeight
          direction={direction}
          margin={direction === 'column' ? '.5rem 0 0 0' : ''}
          width={headingWidth ? '' : '150px'}
        >
          {desc}
        </SpecialLineHeight>
      </ExtendsContainerSCard>
    </>
  );
}

export default SimpleCard;

const SpecialLineHeight = styled.p`
  text-align: center;
  line-height: 18px;
  font-family: 'Poppins Bold';
  ${({ margin }) => (margin ? `margin:${margin}` : '')};
  ${({ direction }) =>
    direction === 'row' &&
    css`
      ${({ width }) => (width ? `width:${width}` : '')};
      text-align: left;
      margin-left: 0.5rem;
    `}
`;


const ExtendsContainerSCard = styled(Container)`
@media only screen and (max-width:600px){
  margin-top:.5rem;
  ${({$nomargin})=>$nomargin?"margin:0":""};
}
`