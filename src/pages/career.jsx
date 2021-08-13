import React from "react";
import Head from "next/head"
import Navbar from "../components/navbar/navbar.component";
import Banner from "../components/spanduk/banner.component";
import Section from "../components/section/section.component";
import WhyJoin from "../components/card/why-join.component";
import { Goal } from "../components/section/section.styles";
import Jobs from "../components/jobs/jobs.component";
import { Container } from "../components/navbar/navbar.styles";
import Image from "next/image";
import Footer from "../components/footer/footer.component";
import useFirestore from "../components/context/useFirestore";
  
function Career() {
  const { docs } = useFirestore("jobs");  
  return (
    <>
      <Head>
        <title>Fishlog | Career</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Navbar />
      <Banner belongsTo="career"/>
      <Section title="Why Join FishLog" about>
        <WhyJoin />
        <Container display="flex" justifyContent="center" margin="2rem 0">
          <Image src="/images/office/office1.png" width={300} height={200} />
          <Image src="/images/office/office2.png" width={300} height={200} />
          <Image src="/images/office/office3.png" width={300} height={200} />
        </Container>
      </Section>
      <Section title="Culture of Fishlog">
        <Goal>
          <span>TRUE</span>GOAL
        </Goal>
        <Container display="flex" justifyContent="center" margin="2rem 0">
          <Image src="/images/cultures/culture1.png" width={300} height={250} />
          <Image src="/images/cultures/culture2.png" width={300} height={250} />
          <Image src="/images/cultures/culture3.png" width={300} height={250} />
        </Container>
      </Section>
      <Section title="We Are Hiring!" about>
        {docs.map(({title, overview, requirements, positions, email},i) => (
          <Jobs key={i} title={title} programIntro={overview} requirements={requirements} positions={positions} email={email} />
        ))}
      </Section>
      <Footer />
    </>
  );
}

export default Career;
