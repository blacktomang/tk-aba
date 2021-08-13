import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getInvestments } from '../../../../../components/context/investments-context';
import Layout from 'MyLayouts';
import { Button, Card, CardBody, CardHeader, Col, InputGroup, List, ListItem, Row } from '@paljs/ui';
import styled from 'styled-components';
import useFirestore from '../../../../../components/context/useFirestore';

const Input = styled(InputGroup)`
  margin: 12px 0 0 0;
`;

function Edit() {
  const router = useRouter();
  const { job } = router.query;
  const { docs } = useFirestore("jobs");
  const data = docs.filter(item => item.id === job);
  return (
    <>
      {
        data ? (
          
      <Layout title="Edit Invest Card">
        <Row center>
          <Col breakPoint={{ xl: 12 }}>
            <Card>
              <CardHeader>{data.title}</CardHeader>
              <CardBody>
                <Row>
                  <Col breakPoint={{ xl: 6 }}>
                    <List>
                      <ListItem>{data.title}</ListItem>
                      <ListItem>{data.pembiayaan}juta</ListItem>
                      <ListItem>{data.profit} % / bulan</ListItem>
                      <ListItem>{data.status}</ListItem>
                      <ListItem>{data.durasi_siklus} bulan</ListItem>
                      <ListItem>{data.volume_distribusi} ton/bulan</ListItem>
                    </List>
                  </Col>
                  <Col breakPoint={{ xl: 3 }}>
                    <form action="" method="post" style={{ width: '100%' }}>
                      <Input>
                        <input type="text" placeholder="Edit Title" />
                      </Input>
                      <Input>
                        <input type="number" placeholder="Edit Pembiayaan" />
                      </Input>
                      <Input>
                        <input type="number" placeholder="Edit Profit" />
                      </Input>
                      <Input>
                        <input type="text" placeholder="Edit Status" />
                      </Input>
                      <Input>
                        <input type="text" placeholder="Durasi Siklus" />
                      </Input>
                      <Input>
                        <input type="number" placeholder="Edit Volume Distribusi" />
                      </Input>
                    </form>
                  </Col>
                  <Col breakPoint={{ xl: 3 }}>
                    <Card status="Primary" accent="Info">
                      <header>Hint!</header>
                      <CardBody>Leave the input field blank, for the data you dont wanna update</CardBody>
                    </Card>
                    <Button type="submit" status="Warning" fullWidth>
                      Update
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
        ): (
            <p>wait</p>
        )
      }
    </>
  );
}

export default Edit;
