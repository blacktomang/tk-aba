import Image from 'next/image';
import React from 'react';
import { myLoader } from '../../ImageLoader/loader';
import { Container } from '../navbar/navbar.styles';

function LeadershipCard({ photo, name, role }) {
  return (
    <Container primary textAlign="center">
      <Image src={photo} width={199} height={200} alt={name} loader={myLoader }/>
      <h4>{name}</h4>
      <p>{role}</p>
    </Container>
  );
}

export default LeadershipCard;
