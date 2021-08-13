import React from 'react';
import Layout from 'MyLayouts';
import { Card, CardBody, CardHeader, Col } from '@paljs/ui';

const Home = () => {
  return (
    <Layout title="Web Data">
      <Col breakPoint={{ xs: 12 }}>
        <Card accent="Primary">
          <CardHeader> <header>Web Data</header> <p>Halaman untuk mengatur logo, alamat, kontak, dan nama sekolah</p></CardHeader>
          <CardBody>
            s
          </CardBody>
        </Card>
      </Col>
    </Layout>
  );
};
export default Home;
