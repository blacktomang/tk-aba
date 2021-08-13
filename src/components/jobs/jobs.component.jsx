import React from "react";
import {
  EmailUs,
  JobTitle,
  ProgramIntro,
  Requirements,
  PositionCard,
  JobsContainer,
} from "./jobs.styles";

function Jobs({ title, programIntro, requirements, email, positions}) {
  return (
    <JobsContainer primary margin="1rem 0 2rem 0" career>
      <JobTitle>{title}</JobTitle>
      <ProgramIntro dangerouslySetInnerHTML={{__html: programIntro}}></ProgramIntro>
      <Requirements>
        <p className="bold">Syarat dan Ketentuan :</p>
        {requirements.map((value) => {
          return (
            <li key={value}>
              - <span>{value}</span>
            </li>
          );
        })}
      </Requirements>
      {positions && (
        <>
        <p className="bold">Posisi yang saat ini dibuka :</p>
        <JobsContainer display="flex" justifyContent="center" >
          {positions.map((item) => (
            <PositionCard key={item}>{item}</PositionCard>
          ))}
          </JobsContainer>
          </>
      )}
      <EmailUs href="mailto:career@fishlog.co.id" target="_blank">
        Kirimkan CV dan proposal lamaran Anda ke: email kami
        career@fishlog.co.id, berikan Subject : "{email}"
      </EmailUs>
    </JobsContainer>
  );
}

export default Jobs;
