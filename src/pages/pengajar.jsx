import Banner from '../components/spanduk/banner.component';
import LeadershipCard from '../components/card/leadership.component';
import Navbar from '../components/navbar/navbar.component';
import { Container } from '../components/navbar/navbar.styles';
import Section from '../components/section/section.component';
import Footer from '../components/footer/footer.component';
import useFirestore from '../components/context/useFirestore';
import SEO, { SEOProps } from '../components/SEO';
import React,{ Fragment } from 'react';

export default function Pengajar() {
  const { docs } = useFirestore('pengajar');

  return (
    <Fragment>
      <SEO title="Pengajar | TK Aisyiyah Bustanul Athfal" description="TK Aisyiyah Bustanul Athfal" />
      <Navbar />
      <Banner belongsTo="pengajar" about />
      <Section normalTitle title="Pengajar">
        <Container display="flex" justifyContent="space-around">
          {docs.map(({ id, title, desc, url }, i) => (
            <LeadershipCard key={i} photo={url} name={title} role={desc} />
          ))}
          {/* 
          <LeadershipCard photo="/images/leadership/reza.svg" name="Reza" role="Co-Founder & COO" />
          <LeadershipCard photo="/images/leadership/halim.svg" name="Halim" role="CFO & Business Dev" />
          <LeadershipCard photo="/images/leadership/guntur.svg" name="Guntur" role="CPO" /> */}
        </Container>
      </Section>
      <Footer />
    </Fragment>
  );
}
