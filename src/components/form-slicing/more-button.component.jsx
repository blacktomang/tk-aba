import Link from "next/link";
import React from "react";
import { StyledLink } from "./button.styles";

function MoreButton({ text, width }) {
  return (
    <>
      <Link href="#" tabindex={0} passHref>
        <StyledLink width={width}>{text}</StyledLink>
      </Link>
    </>
  );
}

export default MoreButton;
