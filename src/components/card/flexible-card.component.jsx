import Image from 'next/image';
import React from 'react';
import { myLoader } from '../../ImageLoader/loader';
import MoreButton from '../form-slicing/more-button.component';
import { Container } from '../navbar/navbar.styles';
import { FlexibleContainer } from './card.styles';

function Card({ image, title, desc, zigzag, about, noButton, noImage, reverse, journey, primary, noMargin, loader }) {
  return (
    <Container
      display="flex"
      zigzag={zigzag}
      flexDirection={reverse ? 'row-reverse' : ''}
      margin={about ? '1rem 0 1rem 0' : '2rem 0 0 0'}
      textAlign={reverse ? 'right' : 'left'}
      $about={about}
      $journey={journey}
      alignItems="center"
    >
      {image && (
        <div className="imageController">
          {loader ? (
            <Image
              src={image}
              width={about || journey ? 350 : 200}
              height={200}
              layout="responsive"
              loader={myLoader}
            />
          ) : (
            <Image src={image} width={about || journey ? 350 : 200} height={200} layout="responsive" />
          )}
        </div>
      )}
      <FlexibleContainer
        display="flex"
        flexDirection="column"
        margin={journey ? '0 0 0 2.5rem' : ''}
        $width={noImage}
        $primary={primary}
        $noMargin={noMargin}
      >
        <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
        <p className="contenP" dangerouslySetInnerHTML={{ __html: desc }}></p>
        {/* {noButton || about ? '' : <MoreButton text="Pelajari selengkapnya..." width="250px" />} */}
      </FlexibleContainer>
    </Container>
  );
}

export default Card;
