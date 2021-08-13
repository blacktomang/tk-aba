import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import getBannerStore from '../context/getBanner';
import ScrollAnimation from 'react-animate-on-scroll';
import InputAuthField from '../auth/slicing/input.component';
import useFirestore from '../context/useFirestore';
import { BannerContainer, BannerContainerExtends, BannerImage, ControleWidth } from './banner.styles';
import { myLoader } from '../../ImageLoader/loader';
import { Input } from '../../pages/auth/login';
function Banner({ belongsTo, about, coldStorage, login, children }) {
  const { banner } = getBannerStore('banners', belongsTo);
  const result = banner[0];
  const { docs } = useFirestore('web-info');
  console.log(JSON.stringify(result));

  return (
    <>
      {result !== undefined ? (
        <BannerContainer $about={about} $specific={coldStorage}>
          <BannerContainerExtends
            display="flex"
            flexDirection={!result.url ? 'column' : ''}
            alignItems={result.url ? 'center' : ''}
            justifyContent={result.url ? 'space-around' : 'center'}
            height="calc(100vh - 3.9rem)"
            // height={coldStorage ? 'calc(90vh - 5rem)' : 'calc(100vh - 4rem)'}
            width="73%"
            margin="0 auto"
            white
            $about={about}
            $specific={coldStorage}
            $banner
          >
            {result.url ? (
              <>
                <ControleWidth>
                  <BannerContainer $about={about} $specific={coldStorage}>
                    <ScrollAnimation animateIn="animate__fadeInRightBig" initiallyVisible={false} animateOnce={true}>
                      <HandlingColor color={about ? '' : 'white'}>
                        <h4 style={{ marginBottom: '1rem' }}>{result.title}</h4>
                      </HandlingColor>
                      <HandlingColor color={about ? '' : 'white'}>
                        {result.subtitle && <h5 dangerouslySetInnerHTML={{ __html: result.subtitle }}></h5>}
                      </HandlingColor>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInLeftBig" initiallyVisible={false} animateOnce={true}>
                      <HandlingColor
                        $bold={about}
                        color={about ? '' : 'white'}
                        dangerouslySetInnerHTML={{ __html: result.desc }}
                      ></HandlingColor>
                    </ScrollAnimation>
                    <a href={`https://wa.me/${docs[0] ? docs[0].contact : ''}`} target="_blank">
                      <ButtonHere>Hubungi Kami</ButtonHere>
                    </a>
                    {/* <button>asu</button> */}
                  </BannerContainer>
                </ControleWidth>
                <BannerImage $specific={coldStorage}>
                  <ScrollAnimation animateIn="animate__fadeInLeftBig" initiallyVisible={true} animateOnce={true}>
                    <Image
                      src={result.url}
                      alt=""
                      width={coldStorage ? 1000 : 400}
                      height={coldStorage ? 900 : 500}
                      layout="responsive"
                      loader={myLoader}
                    />
                  </ScrollAnimation>
                </BannerImage>
              </>
            ) : (
              <div style={{ height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <ScrollAnimation animateIn="animate__fadeIn" initiallyVisible={false} animateOnce={true}>
                  <HandlingColor
                    color={about ? '' : 'white'}
                    dangerouslySetInnerHTML={{ __html: result.title }}
                  ></HandlingColor>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" initiallyVisible={false} animateOnce={true} delay={1000}>
                  <HandlingColor color={about ? '' : 'white'} size="1.2rem">
                    {result.subtitle && <h5 dangerouslySetInnerHTML={{ __html: result.subtitle }}></h5>}
                  </HandlingColor>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" initiallyVisible={false} animateOnce={true} delay={2000}>
                  <HandlingColor
                    color={about ? '' : 'white'}
                    dangerouslySetInnerHTML={{ __html: result.desc }}
                  ></HandlingColor>
                </ScrollAnimation>
              </div>
            )}
            {children && children}
          </BannerContainerExtends>
        </BannerContainer>
      ) : (
        <div style={{ height: 'calc(100vh - 3.9rem)', backgroundColor: 'var(--first-color)' }}></div>
      )}
    </>
  );
}

export default Banner;

const HandlingColor = styled.span`
  ${({ size }) => (size ? `font-size:${size}!important` : '')};
  letter-spacing: 1px;
  ${({ color }) => (color ? `color:${color}!important` : '')}
`;

export const ButtonHere = styled.div`
  background-color: var(--first-color);
  font-family: 'Poppins';
  width: 200px;
  padding: 1rem;
  text-align: center;
  border-radius: 40px;
  margin-top: 1rem;
  cursor: pointer;
  color: white;
  border: 1px solid white;
  transition: all 0.5s ease;
  a {
    color: white;
    text-decoration: none;
  }
  &:hover {
    background-color: white;
    a {
      color: var(--first-color);
    }
    color: var(--first-color);
  }

  @media only screen and (max-width: 800px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;
