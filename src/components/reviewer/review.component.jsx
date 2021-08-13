import Image from 'next/image'
import React from 'react'
import { ImageController } from '../navbar/navbar.styles'
import { RevieText, ReviewCard, ReviewCardContainer } from './review.styles'

function Review() {
  return (
      <ReviewCardContainer display="flex" justifyContent="space-between" flexWrap="wrap">
      <ReviewCard>
        
        <ImageController>
            <Image  src="/images/clients1.png" height={200} width={200} layout="responsive"/>
        </ImageController>
            <RevieText>
             <p>“ Usaha saya semakin lancar, Sejak ergabung <br/>Bdengan FishLog banyak pembeli tak terduga ”</p>
              <h6 className="name">Ferry, Mitra Cold Storage</h6>
            </RevieText>
          </ReviewCard>
          <ReviewCard>
          <ImageController>
            <Image  src="/images/clients2.png" height={200} width={200} layout="responsive"/>
          </ImageController>
            <RevieText>
              <p>“ Ikannya bagus, konsumen saya suka dan<br/> jualan makin lancar ”</p>
              <h6 className="name">Iwan, Mitra Dapur Pindang</h6>
            </RevieText>
          </ReviewCard>
        </ReviewCardContainer>      
  )
}

export default Review
