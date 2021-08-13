import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '../icons/fb';
import GoogleIcon from '../icons/google';
import InstagramIcon from '../icons/ig';
import TwitterIcon from '../icons/twitter';
import YoutubeIcon from '../icons/yt';
import { Container } from '../navbar/navbar.styles';
import { FooterContainer, FooterStyledLink, GridFooter } from './footer.style';
import useFirestore from '../context/useFirestore';

function Footer({ login }) {
  const { docs } = useFirestore('web-info');

  return (
    <FooterContainer>
      {/* <GridFooter $login={login}>
        <div className="logo"> 
          <Image src={docs[0] ? docs[0].logo : '/images/logo.jpg'} width={100} height={100} layout="responsive" />
        </div>
        <div className="title-company">
          <h4>School</h4>
        </div>
        <div className="content1-company">
          <Link href="#">About</Link>
        </div>
        <div className="content2-company">
        </div>
        <div className="content3-company">
        </div>
        <div className="title-product">
          <h4>Product & Service</h4>
        </div>
        <div className="content1-product">
          <Link href="#">FishLog Supply Chain</Link>
        </div>
        <div className="content2-product">
          <Link href="#">FishLog Ecosystem</Link>
        </div>
        <div className="content3-product">
          <Link href="#">FishLog WMS App</Link>
        </div>
        <div className="content4-product">
          <Link href="#">Aplikasi Mitra FishLog</Link>
        </div>
        <div className="title-addres">
          <h4> {docs[0] ? docs[0].name : ''}</h4>
        </div>
        <div className="addres content1-addres">
          <Link href="#" passHref>
            {docs[0] ? docs[0].address : ''}
          </Link>
        </div>
        <div className="content2-addres">
          <Link href="#" passHref>
            {docs[0] ? docs[0].city : ''}
          </Link>
        </div>
        <div className="content3-addres">
          <Link href="#">{docs[0] ? docs[0].contact : ''}</Link>
        </div>
        <div className="content4-addres">
          <Container display="flex" justifyContent="space-between">
            <Link href="#" passHref>
              <FacebookIcon />
            </Link>
            <Link href="#" passHref>
              <InstagramIcon />
            </Link>
            <Link href="#" passHref>
              <TwitterIcon />
            </Link>
            <Link href="#" passHref>
              <YoutubeIcon />
            </Link>
            <Link href="#" passHref>
              <GoogleIcon />
            </Link>
          </Container>
        </div>
      </GridFooter> */}
      <Container width="80%" margin="0 auto" display="flex" flexDirection="column" alignItems="center" fontSize="1rem">
        {/* <div style={{ height: '1px', width: '100%', backgroundColor: 'gray', marginBottom: '1rem' }}></div> */}
        <BottomFooter>©2021 by PMM Mitra Dosen Universitas Muhammadiyah Malang</BottomFooter>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

const BottomFooter = styled.p`
  margin: 1rem 0;
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem !important;
  }
`;
