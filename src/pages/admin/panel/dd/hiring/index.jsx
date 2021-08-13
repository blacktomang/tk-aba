import Layout from 'MyLayouts';
import React from 'react';
import styled from 'styled-components';
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
const IconWrapper = styled.div`
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  &.email {
    margin-bottom: 0.5rem;
  }
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
  const { docs } = useFirestore('jobs');
  const deleteJob = (id) => {
    db.collection('jobs')
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
      <Layout title="Recruitments">
        <Row>
          <Col breakPoint={{ xs: 12 }}>
            <Card accent="Primary">
              <CardHeader>
                <Row center around>
                  List of recruitments
                  <Button status="Primary" onClick={() => router.push(`${router.pathname}/addjobs`)}>
                    Add New Recruitment
                  </Button>
                </Row>
              </CardHeader>
              <Row>
                {docs.map(({ id, title, overview, requirements, email }, index) => (
                  <Col breakPoint={{ xs: 12, md: 6 }} key={index}>
                    <Card status="Info">
                      <CardHeader>
                        <Row around>{title}</Row>
                      </CardHeader>
                      <CardBody>
                        <Tabs activeIndex={0} fullWidth>
                          <Tab title="Overview" icon="icon ion-ios-home" responsive>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: overview.length > 10 ? `${overview.substring(0, 150)}...` : '',
                              }}
                            ></p>
                          </Tab>
                          <Tab
                            title="Requirements"
                            icon="icon ion-ios-star-outline"
                            badge={{ status: 'Info', title: requirements.length, position: 'topEnd' }}
                            responsive
                          >
                            <List>
                              {requirements.map((requirement, index) => (
                                <ListItem key={index}>
                                  {index + 1 + ' '}
                                  {requirement}
                                </ListItem>
                              ))}
                            </List>
                          </Tab>
                        </Tabs>
                      </CardBody>
                      <CardFooter>
                        <Row around>
                          <IconWrapper color="#0295FD" className="email">                            
                            <p>Subject Email: {email}</p>
                          </IconWrapper>
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
                              <IconWrapper
                                color="var(--second-color)"
                                onClick={() => router.push(`${router.pathname}/${id}`)}
                              >
                                <EvaIcon name="edit-2-outline" />
                              </IconWrapper>
                            </Tooltip>
                            <Tooltip
                              key={index + 2}
                              eventListener="#scrollPlacementId"
                              className=" inline-block"
                              trigger="hint"
                              placement="top"
                              content="Expand"
                              icon="expand-outline"
                            >
                              <IconWrapper color="var(--first-color)">
                                <EvaIcon name="expand-outline" />
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
