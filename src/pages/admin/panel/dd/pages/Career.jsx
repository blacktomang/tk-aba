import Layout from 'MyLayouts';
import React, { useRef, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  EvaIcon,
  InputGroup,
  List,
  Row,
  Select,
  Tab,
  Tabs,
  Tooltip,
} from '@paljs/ui';
import { Editor } from '@tinymce/tinymce-react';

function Career() {
  return (
    <Layout title="FSC Page">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card accent="Primary">
            <CardHeader>Banner</CardHeader>
            <CardBody>
              <form action="post">
                <span></span>
                <Editor
                  apiKey="b77psby9ah5vvc1tqe4ny53m2of36i0f16zwnrrohxtljygy"
                  tagName="input"
                  textareaName="title"
                  initialValue=""
                  init={{
                    height: 150,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help',
                  }}
                />
                <header style={{ marginTop: '1rem' }}></header>
                <InputGroup fullWidth status="Primary">
                  <input type="text" placeholder="edit sub title" name="desc" />
                </InputGroup>
                <header></header>
                <Editor
                  apiKey="b77psby9ah5vvc1tqe4ny53m2of36i0f16zwnrrohxtljygy"
                  tagName="input"
                  textareaName="subtitle"
                  initialValue=""
                  init={{
                    height: 100,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help',
                  }}
                />
                <Button status="Info" type="button">
                  Update
                </Button>
              </form>
              {/* {data && <Path folder="banners" data={data} id={id[0]} />} */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Career;
