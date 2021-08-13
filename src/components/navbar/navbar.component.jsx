import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useFirestore from '../context/useFirestore';

import {
  Container,
  NavItem,
  NavItemContainer,
  StyledLink,
  Nav,
  LogoName,
  DropdownItem,
  ImageController,
  BackTrigger,
} from './navbar.styles';
import Bar from '../icons/bar';
import Arrow from '../icons/arrow';
import { useRouter } from 'next/router';
import { myLoader } from '../../ImageLoader/loader';

export default function Navbar() {
  const router = useRouter();
  const { docs } = useFirestore('web-info');

  const [togle, setTogle] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleScroll = () => setScroll(window.scrollY);

  return (
    <Container navContainer>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="4rem"
        width="73%"
        margin="0 auto"
        nav
      >
        <div style={{ display: 'flex', width: '30%', alignItems: 'center' }} onClick={() => router.push('/')}>
          <Link href="/">
            <ImageController>
              <Image
                src={docs[0] ? docs[0].logo : '/images/logo.jpg'}
                width={40}
                height={40}
                loader={myLoader}
                layout="responsive"
                priority
              />
            </ImageController>
          </Link>
          <LogoName style={{ marginLeft: 5 }}> {docs[0] ? docs[0].name : 'TK Aisyiyah Bustanul Athfal'}</LogoName>
        </div>
        <div onClick={() => setTogle(!togle)}>
          <Bar />
        </div>
        <Nav $display={togle} $dropDown>
          <NavItemContainer>
            <NavItem onClick={() => router.push('/')}>
              {/* <Link href="/"> */}
              <StyledLink className={router.pathname == '/' ? 'active' : ''} as="a">
                Beranda
              </StyledLink>
              {/* </Link> */}
            </NavItem>
            <NavItem onClick={() => router.push('/about')}>
              {/* <Link href="/about"> */}
              <StyledLink className={router.pathname == '/about' ? 'active' : ''} as="a">
                Tentang Kami
              </StyledLink>
              {/* </Link> */}
            </NavItem>
            <NavItem onClick={() => router.push('/galery')}>
              {/* <Link href="/galery"> */}
              <StyledLink className={router.pathname == '/galery' ? 'active' : ''} as="a">
                Galeri
              </StyledLink>
              {/* </Link> */}
            </NavItem>
            {/* <NavItem>
              <Link href="#">
                <StyledLink 
                className={router.pathname == "" ? "active" : ""} as="a">Career</StyledLink>
              </Link>
            </NavItem>*/}
            <NavItem onClick={() => router.push('/pengajar')}>
              {/* <Link href="/pengajar"> */}
              <StyledLink className={router.pathname == '/pengajar' ? 'active' : ''} as="a">
                Pengajar
              </StyledLink>
              {/* </Link> */}
            </NavItem>
            {/* <NavItem>
              <Link href="/login">
                <StyledLink 
                className={router.pathname == "" ? "active" : ""} as="a">Login</StyledLink>
              </Link>
            </NavItem> */}
          </NavItemContainer>
          <div onClick={() => setTogle(!togle)} style={{ height: '70%', width: '100%' }}></div>
        </Nav>
      </Container>
    </Container>
  );
}
