import Image from 'next/image';
import React from 'react';
import useFirestore from '../context/useFirestore';
import { Container } from '../navbar/navbar.styles';
import { CardContainer } from './card.styles';
import { myLoader } from '../../ImageLoader/loader';
import ScrollAnimation from 'react-animate-on-scroll';
function WhoJoin() {
  const { docs } = useFirestore('pengajar');

  return (
    <Container display="flex" flexDirection="row" justifyContent="space-around">
      {docs.map(({ id, title, desc, url }, i) => {
        if (i < 4) {
          return (
            <CardContainer
              key={i}
              $center
              gap="12px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              flexBasis="33%"
            >
              <ScrollAnimation animateIn="animate__zoomIn" initiallyVisible={false} animateOnce={true}>
                <Image src={url} alt={`partners${i + 1}`} width={199} height={200} quality={1000} loader={myLoader} />
                <h4>{title}</h4>
                <p>{desc}</p>
              </ScrollAnimation>
            </CardContainer>
          );
        }
      })}
    </Container>
  );
}

export default WhoJoin;
