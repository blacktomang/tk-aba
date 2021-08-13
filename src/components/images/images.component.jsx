import { Container } from '../navbar/navbar.styles';
import Image from 'next/image';
import React from 'react';
import useFirestore from '../context/useFirestore';
import { myLoader } from '../../ImageLoader/loader';
function Images({ category }) {
  const { docs } = useFirestore(category);
  return (
    <Container display="flex" justifyContent="space-around">
      {docs.map(({ url, id }, i) => {
        if (i < 4) {
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
