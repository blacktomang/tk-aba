import Image from 'next/image';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from '../../navbar/navbar.styles';
import { IntroContainer, Text } from './intro.styles';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { myLoader } from '../../../ImageLoader/loader';
function Intro({ image, text, center, smaller, child }) {
  const router = useRouter();
  return (
    <IntroContainer
      display="flex"
      smaller={smaller}
      width="73%"
      justifyContent="space-around"
      alignItems="center"
      margin="0 auto"
      primary
      $child={child}
    >
      {image && (
        <ScrollAnimation animateIn="animate__jackInTheBox" initiallyVisible={false} animateOnce={true}>
          <Image src={image} alt="s" width={400} height={250} loader={myLoader} />
        </ScrollAnimation>
      )}
      <Container primary width={image ? '50%' : '100%'}>
        <h4>Selamat Datang di TK ABA</h4>
        <Text center={center}>{text}</Text>
        <ButtonHere onClick={() => router.push('/about')}>Detail</ButtonHere>
      </Container>
    </IntroContainer>
  );
}

export default Intro;
const ButtonHere = styled.div`
  background-color: white;
  font-family: 'Poppins';
  width: 100px;
  padding: 0.5rem;
  text-align: center;
  border-radius: 40px;
  margin-top: 1rem;
  cursor: pointer;
  color: var(--first-color);
  border: 1px solid var(--first-color);
  transition: all 0.5s ease;
  &:hover {
    border: 1px solid var(--first-color);
    background-color: white;
    color: var(--first-color);
  }

  @media only screen and (max-width: 800px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;
