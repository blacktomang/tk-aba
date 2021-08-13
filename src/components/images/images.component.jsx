import { Container } from '../navbar/navbar.styles';
import Image from 'next/image';
import React from 'react';
import useFirestore from '../context/useFirestore';
import { myLoader } from '../../ImageLoader/loader';
function Images({ category, all }) {
  const { docs } = useFirestore(category);
  return (
    <Container display="flex" justifyContent="space-around">
      
      {docs.map(({ url, id }, i) => {
        if (all !== 'all') {
          return i<4?
           (
            <div style={{ borderRadius: 8, overflow: 'hidden' }}>
              <Image
                key={id}
                src={url}
                width={300}
                height={category === 'publications' ? 175 : 175}
                loader={myLoader}
              />
            </div>
          ):('');
        } else {
          return (
            <div style={{ borderRadius: 8, overflow: 'hidden' }}>
              <Image
                key={id}
                src={url}
                width={300}
                height={category === 'publications' ? 175 : 175}
                loader={myLoader}
              />
            </div>
          );
        }
      })}
    </Container>
  );
}

export default Images;
