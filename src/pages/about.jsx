import Head from 'next/head';
import Banner from '../components/spanduk/banner.component';
// import MiddleBanner, { Insider } from '../components/spanduk/middle-banner.component';
import Card from '../components/card/flexible-card.component';
// import LeadershipCard from '../components/card/leadership.component';
import Navbar from '../components/navbar/navbar.component';
// import { Container } from '../components/navbar/navbar.styles';
import Section from '../components/section/section.component';
// import JoinForm from '../components/card/join-form.component';
import Footer from '../components/footer/footer.component';
import useFirestore from '../components/context/useFirestore';
import SEO from '../components/SEO';
import React, { Fragment } from 'react';
import BadgeCard from '../components/card/BadgeCard';

export default function About() {

  return (
    <Fragment>
      <SEO
        title="Tentang | TK Aisyiyah Bustanul Athfal"
        description="Sejarah atau Perjalanan TK Aisyiyah Bustanul Athfal"
      />
      <Navbar />
      <Banner belongsTo="about" />
      <Section normalTitle title="Perjalanan TK ABA">
       <BadgeCard/>
      </Section>
      {/* <MiddleBanner>
        <Insider
          upper="50,000 kg"
          lower={
            <span>
              Monthly
              <br />
              Distribution
            </span>
          }
        />
        <Insider
          upper="50 Cities"
          lower={
            <span>
              Coverage
              <br />
              Area
            </span>
          }
        />
        <Insider
          upper="30 Partner"
          lower={
            <span>
              Ecosystem
              <br />
              Partner
            </span>
          }
        />
        <Insider
          upper="9"
          lower={
            <span>
              Fisheries
              <br />
              Commodities
            </span>
          }
        />
      </MiddleBanner>
      <Section
        normalTitle
        title="Memiliki visi yang sama dengan FishLog?"
        addition="Mari bergabung, tumbuh dan berkembang bersama kami !"
      ></Section> */}
      {/* <JoinForm /> */}
      <Footer />
    </Fragment>
  );
}
