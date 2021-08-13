import Layout from 'MyLayouts';
import React, { useRef, useState } from 'react';
import {
  Col,
  Row,
} from '@paljs/ui';

import BannerData from '../../../../../../components/new/BannerData';

function Home() {
  return (
    <Layout title="Tentang | Admin Panel">
      <Row>
        <Col breakPoint={{ xs: 12, lg: 12 }}>
          <BannerData collection="banners" belongsTo="about" />
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
