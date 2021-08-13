import React from 'react';
import { AppCardContainer, Demo, Try } from './card.styles';

function AppCard() {
  return (
    <AppCardContainer>
      <h1 className="left">Kemudahan Menjalankan Bisnis Cold Storage</h1>
      <div className="right">
        <p style={{ fontStyle: 'italic' }}>tertarik menggunakan WMS App?</p>
        <div className="button">
          <Try href="https://wms.fishlog.co.id" target="_blank">Coba WMS Gratis</Try>
          <Demo>Online Demo</Demo>
        </div>
      </div>
    </AppCardContainer>
  );
}

export default AppCard;
