import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import useFirestore from '../context/useFirestore';
import { Submit } from '../form-slicing/button.styles';
import { Container } from '../navbar/navbar.styles';
import PartnerShip from './partnership.component';

function PartnersipBadge() {
  const { docs } = useFirestore('investments');
  const [partnershipCounter, setPartnershipCounter] = useState(3);
  return (
    <>
      <Container display="flex" justifyContent="space-around" margin="1rem 0">
        {docs
          .slice(0, partnershipCounter)
          .map(({ id, title, status, pembiayaan, volume_distribusi, durasi_siklus, profit, url }, i) => (
            <ScrollAnimation
              key={i}
              delay={500 * i}
              animateIn="animate__zoomIn"
              initiallyVisible={false}
              animateOnce={true}
            >
              <PartnerShip
                id={id}
                title={title}
                status={status}
                pembiayaan={pembiayaan}
                volume_distribusi={volume_distribusi}
                durasi_siklus={durasi_siklus}
                profit={profit}
                imageURL={url}
              />
            </ScrollAnimation>
          ))}
      </Container>
      <div style={{ margin: '0 auto' }}>
        {docs.length > 3 ? (
          <Submit onClick={() => setPartnershipCounter(partnershipCounter + 3)}>Lihat opportunity lainnya..</Submit>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default PartnersipBadge;
