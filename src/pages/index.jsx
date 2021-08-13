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
import { createRef, Fragment, useEffect, useRef, useState } from 'react';

export default function Home() {
  const web = useFirestore('web-info');

  return (
    <Fragment>
      <SEO title="Beranda | TK Aisyiyah Bustanul Athfal" description="TK Aisyiyah Bustanul Athfal DAU" />
      <Navbar />
      <Banner belongsTo="home" />

      {web.docs[0] ? <Intro image={web.docs[0].introImg} text={web.docs[0].intro} /> : <div></div>}

      <Section normalTitle title="Pengajar">
        {/* {docs.map(({ title, desc, url, id }) => { */}
        {/* return <Card key={id} zigzag image={url} title={title} desc={desc} loader={myLoader} />; */}
        {/* })} */}
        <WhoJoin />
      </Section>
      <br />
      <br />
      <Section normalTitle title="Galeri">
        <Images category="galeri" />
      </Section>
      <Footer />
    </Fragment>
  );
}
