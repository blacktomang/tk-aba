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
        <Card
          image="/images/journey/2018.png"
          title="2018"
          desc="
            <span>
              Dimulai dengan mengelola Mini-Plant Unit Pengolahan Ikan Fillet di Bogor yang dimiliki oleh Petani Ikan
              setempat. <strong>FishLog ikut serta dalam pengembangan SOP dan peningkatan produktifitas UPI</strong>,
              turut memberdayakan lebih dari 10 ibu rumah tangga lokal. Memproduksi hingga 500 kg ikan fillet setiap
              hari.
            </span>
          "
          journey
          about
          primary
        />
        <Card
          image="/images/journey/2019.png"
          title="2019"
          desc="
            <span>
              Berpartisipasi dalam program Akselerasi Startup Global “Seafood Innovation Projects” selama 6 bulan,
              bersama dengan 5 startup perikanan dari seluruh dunia.
              <strong>
                FishLog ditantang untuk mengembangkan berbagai model bisnis dalam rangka memecahkan masalah rantai pasok
                perikanan di Indonesia
              </strong>
            </span>"
          journey
          about
          primary
        />
        <Card
          image="/images/journey/2020.png"
          title="2020"
          desc="
            <span>
              Memulai fokus mengembangkan digitalisasi sistem aplikasi. Menemukan Problem-Solution Fit dalam pengelolaan
              Cold Storage.<strong> FishLog mengembangkan Aplikasi Digitalisasi Cold Storage</strong> . Dengan aplikasi
              tersebut, FishLog meraih Juara 1 pada Ajang Small Grant Post-Harvest-Loss Competition 2020
            </span>"
          journey
          about
          primary
        />
        <Card
          image="/images/journey/2021.png"
          title="2021"
          desc="
            <span>
              Mengembangkan <strong> FishLog Supply Chain</strong>, solusi distribusi hulu hilir rantai pasok perikanan
              untuk Unit Pengolahan Ikan Tradisional. Hingga Maret 2021 telah mendistribusikan lebih dari 200 ton ikan
              secara kontinu ke lebih dari 20 Mitra Pengolah Ikan di 4 Kota/Kabupaten
            </span>"
          journey
          about
          primary
        />
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
