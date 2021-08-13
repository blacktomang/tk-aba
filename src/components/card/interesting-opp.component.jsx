import React from "react";
import { ItemContainer,CardContainer } from "./card.styles";

function CardPeluang() {
  return (
    <>
      <CardContainer display="flex" justifyContent="center" margin="0 auto">
        <ItemContainer>
          <li>
            <img src="/images/li.svg" alt="" />
            <p>Kepastian Harga</p>
          </li>
          <li>
            <img src="/images/li.svg" alt="" />
            <p>Akses Permodalan</p>
          </li>
          <li>
            <img src="/images/li.svg" alt="" />
            <p>Perluasan Pasar</p>
          </li>
          <li>
            <img src="/images/li.svg" alt="" />
            <p>Optimalisasi Usaha</p>
          </li>
          <li>
            <img src="/images/li.svg" alt="" />
            <p>Peluang Berjejaring</p>
          </li>
        </ItemContainer>
      </CardContainer>
    </>
  );
}

export default CardPeluang;
