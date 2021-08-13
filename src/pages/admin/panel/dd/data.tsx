import React from 'react';
import Layout from 'MyLayouts';
import EditWebDataPage from 'components/EditWebDataPage';
import { Col, Row } from '@paljs/ui';



const Home = () => {
  return (
    <Layout title="Web Data">
      <Row>
        <Col breakPoint={{ xs: 12, lg: 12 }}>
          <EditWebDataPage collection="web-info" />
        </Col>
      </Row>
    </Layout>
  );
};
export default Home;
