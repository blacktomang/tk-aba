import React from "react";
import styled from "styled-components";
import { Container } from "../navbar/navbar.styles";
import {
  BannerContainer,
  SingleHeading,
  UpperHeading,
  LowerHeading,
} from "./banner.styles";

function MiddleBanner({ single, children }) {
  return single ? (
    <BannerContainer $middle height="180px" normal white>
      <TopContainer
        display="flex"
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="73%"
        margin="0 auto"
      >
        <SingleHeading>{single}</SingleHeading>
      </TopContainer>
    </BannerContainer>
  ) : (
    <BannerContainer $middle height="200px">
      <TopContainer
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
          alignItems="center"
          height="100%"
          width="73%"
          margin="0 auto"
      >
        {children}
      </TopContainer>
    </BannerContainer>
  );
}

export default MiddleBanner;

export const Insider = ({ upper, lower }) => {
  return (
    <>
      <NewContainer display="flex" flexDirection="column" height="100%" justifyContent="space-evenly">
        <UpperHeading>{upper}</UpperHeading>
        <LowerHeading>{lower}</LowerHeading>
      </NewContainer>
    </>
  );
};

const NewContainer = styled(Container)`
@media only screen and (max-width:600px){
height: 10vh;

}
`
const TopContainer = styled(Container)`
@media only screen and (max-width:600px){
  width:calc(100% - 30px);
}
`
