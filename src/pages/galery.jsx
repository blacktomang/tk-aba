import Head from 'next/head';
import Banner from '../components/spanduk/banner.component';
import CardPeluang from '../components/card/interesting-opp.component';
import Card from '../components/card/flexible-card.component';
import WhoJoin from '../components/card/whocanjoin-card.component';
import Navbar from '../components/navbar/navbar.component';
import Section from '../components/section/section.component';
import Intro from '../components/unique/intro/intro.component';
import Footer from '../components/footer/footer.component';
import PartnersipBadge from '../components/card/partnersip-badge.component';
import Images from '../components/images/images.component';
import useFirestore from '../components/context/useFirestore';
import { myLoader } from '../ImageLoader/loader';
import SEO, { SEOProps } from '../components/SEO';
import { createRef, useEffect, useRef, useState } from 'react';
export default function Galery() {
  const { docs } = useFirestore('pengajar');
  console.log(docs);
  const web = useFirestore('web-info');
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {};
  }, []);
  return (
    <>
      <SEO title="Galeri | TK Aisyiyah Bustanul Athfal" description="TK Aisyiyah Bustanul Athfal" />
      <Navbar />
      <Banner belongsTo="galery" />
      <Section normalTitle title="Galeri">
        <Images category="galeri" />
      </Section>
      <Footer />
    </>
  );
}
