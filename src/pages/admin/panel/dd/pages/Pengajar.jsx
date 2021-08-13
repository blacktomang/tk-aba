import Layout from 'MyLayouts';
import React, { useRef, useState } from 'react';
import ProgressBar from '../../../../../components/progressbar/progress-bar.component';
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  EvaIcon,
  InputGroup,
  List,
  ListItem,
  Row,
  Tooltip,
} from '@paljs/ui';
import { Editor } from '@tinymce/tinymce-react';
import { Path } from '../../../../../components/context/path';
import getBannerStore from '../../../../../components/context/getBanner';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import BannerData from '../../../../../components/new/BannerData';

function Home() {
  return (
    <Layout title="Pengajar | Admin Panel">
      <Row>
        <Col breakPoint={{ xs: 12, lg: 12 }}>
          <BannerData collection="banners" belongsTo="pengajar" />
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
