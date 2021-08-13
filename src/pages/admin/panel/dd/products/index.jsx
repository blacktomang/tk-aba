import Layout from 'MyLayouts';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  EvaIcon,
  List,
  ListItem,
  Row,
  Tab,
  Tabs,
  Tooltip,
} from '@paljs/ui';
import { db } from '../../../../../firebase/firebase';
import useFirestore from '../../../../../components/context/useFirestore';
import { myLoader } from '../../../../../ImageLoader/loader';

const IconWrapper = styled.div`
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  ${({ color }) => (color ? `background-color:${color}` : '')};
  svg {
    fill: white;
  }
  p {
    padding: 0.2rem 1rem;
    color: white;
    font-weight: bold;
    font-family: 'Poppins';
  }
`;
function Index() {
  const router = useRouter();
  const { docs } = useFirestore('products');
  const [display, setDisplay] = useState(false);

  const deleteJob = (id) => {
    db.collection('products')
      .doc(id)
      .delete()
      .then(() => {
        alert('Document successfully deleted!');
      })
      .catch((error) => {
        alert('Error removing document: ', error);
      });
  };

  return (
    <>
      <Layout title="Fishlog Products">
        <Row>
          <Col breakPoint={{ xs: 12 }}>
            <Card accent="Primary">
              <CardHeader>
                <Row center around>
                  List of Products
                  <Button status="Primary" onClick={() => router.push(`${router.pathname}/addProducts`)}>
                    Add New Products
                  </Button>
                  <div style={{ position: 'relative', width: '5%' }}>
                    <Tooltip
                      eventListener="#scrollPlacementId"
                      className=" inline-block"
                      trigger="hint"
                      placement="top"
                      content="Show Image"
                      icon="image-outline"
                    >
                      <IconWrapper color="var(--first-color)" onClick={() => setDisplay(!display)}>
                        <EvaIcon name="image-outline" />
                      </IconWrapper>
                    </Tooltip>
                  </div>
                </Row>
              </CardHeader>
              <Row>
                {docs.map(({ id, title, desc, url }, index) => (
                  <Col breakPoint={{ xs: 12, md: 4 }} key={index}>
                    <Card status="Info">
                      <CardHeader>
                        <Row around>{title}</Row>
                      </CardHeader>
                      <CardBody>
                        <Tabs activeIndex={0} fullWidth>
                          <Tab title="Description" icon="icon ion-ios-star-outline" responsive>
                            <List>{desc}</List>
                          </Tab>
                        </Tabs>
                      </CardBody>
                      <CardFooter style={{ display: display ? 'flex' : '', justifyContent: 'space-around' }}>
                        <div style={{ display: display ? 'block' : 'none' }}>
                          <Image src={url} width={200} height={100} loader={myLoader} />
                        </div>
                        <Row around>
                          <Row around style={{ width: '50%' }}>
                            <Tooltip
                              key={index + 1}
                              eventListener="#scrollPlacementId"
                              className=" inline-block"
                              trigger="hint"
                              placement="top"
                              content="Edit"
                              icon="edit-2-outline"
                            >
                              <IconWrapper color="var(--second-color)">
                                <EvaIcon name="edit-2-outline" />
                              </IconWrapper>
                            </Tooltip>
                            <Tooltip
                              key={index + 3}
                              eventListener="#scrollPlacementId"
                              className=" inline-block"
                              trigger="hint"
                              placement="top"
                              content="Delete"
                              icon="trash-outline"
                            >
                              <IconWrapper color="red" onClick={() => deleteJob(id)}>
                                <EvaIcon name="trash-outline" />
                              </IconWrapper>
                            </Tooltip>
                          </Row>
                        </Row>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Index;
