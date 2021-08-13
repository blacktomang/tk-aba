import React from 'react';
import { PureH1, SectionContainer, AdditionText, SubTitleStyled, ExtendsContainer } from './section.styles';

function Section({ title, subTitle, about, addition, children, reverse, normalTitle, id }) {
  return (
    <>
      <SectionContainer>
        <ExtendsContainer
          id={id}
          margin="3rem auto 1rem auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="73%"
          $about={about ? true : false}
          primary
          textAlign={reverse && about ? 'right' : 'left'}
        >
          <PureH1 textAlign={normalTitle ? 'center' : ''}>{title}</PureH1>
          {subTitle && <SubTitleStyled>{subTitle}</SubTitleStyled>}
          {addition && <AdditionText>{addition}</AdditionText>}
          {children}
        </ExtendsContainer>
      </SectionContainer>
    </>
  );
}

export default Section;
