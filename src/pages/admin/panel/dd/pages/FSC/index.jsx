import Layout from 'MyLayouts';
import React, { useRef, useState } from 'react';
import ProgressBar from '../../../../../../components/progressbar/progress-bar.component';
import { Button, Card, CardBody, CardHeader, Col, InputGroup, List, Row, Select, Tab, Tabs, Tooltip } from '@paljs/ui';
import { Editor } from '@tinymce/tinymce-react';
import { Path } from '../../../../../../components/context/path';
import getBannerStore from '../../../../../../components/context/getBanner';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useFirestore from '../../../../../../components/context/useFirestore';
import { db, timeStamp } from '../../../../../../firebase/firebase';
import AddString from '../../../../../../components/context/addString';
const ImgPreview = styled(Row)`
  max-width: 100%;
  margin-top: 0.5rem;
  img {
    max-width: 90%;
    border-radius: 5px;
  }
`;

const Inputfile = styled.input`
  margin: 0;
  padding: 0;
  width: 0;
  height: 0;
  outline: none;
  opacity: 0;
  cursor: pointer;
`;
function FSC() {
  const [introData, setIntroData] = useState(null);
  const [intro, setIntro] = useState();

  const introChange = (content, _editor) => {
    setIntro(_editor.getContent());
  };
  const submitIntro = () => {
    setIntroData({
      content: intro,
      belongsTo: 'fsc',
    });
  };

  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(false);
  const [data, setData] = useState({});
  const types = ['image/png', 'image/jpeg', 'image/svg', 'image/jpg'];

  const getImage = () => {
    fileRef.current.click();
  };

  const fileChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Check your file format');
    }
    console.log(selected.type);
  };

  const addNewCard = (e) => {
    e.preventDefault();
    try {
      setData({
        title: e.target.title.value,
        desc: e.target.desc.value,
      });
    } catch (err) {
      alert(err);
    }
  };
  const handleSubmit = () => {
    setPost(!post);
    setTimeout(() => {
      setPost(false);
    }, 5000);
  };

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
        <Col breakPoint={{ xs: 12 }}>
          <Card accent="Primary">
            <CardHeader>Intro</CardHeader>
            <CardBody>
              <form action="post" onSubmit={submitIntro}>
                <span></span>
                <Editor
                  apiKey="b77psby9ah5vvc1tqe4ny53m2of36i0f16zwnrrohxtljygy"
                  tagName="input"
                  textareaName="title"
                  initialValue="Intro 1"
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
                  onBlur={introChange}
                />
                <header style={{ marginTop: '1rem' }}></header>
                <Button status="Info" type="button" onClick={submitIntro}>
                  Update
                </Button>
              </form>
              {introData && <AddString folder="intro" data={introData} />}
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card accent="Primary">
            <header>How We Help</header>
            <CardBody>
              <form method="Post" onSubmit={addNewCard}>
                <InputGroup fullWidth>
                  <input type="text" placeholder="Title" name="title" />
                </InputGroup>
                <InputGroup fullWidth>
                  <textarea type="text" placeholder="Description" name="desc" />
                </InputGroup>
                <label>
                  <Button type="submit" status="Primary" fullWidth onClick={getImage}>
                    Image for Card
                  </Button>
                  <Inputfile id="inputfile" type="file" onChange={fileChange} ref={fileRef} />
                </label>
                <ImgPreview center>
                  {error && <>{error}</>}
                  {file && <img src={URL.createObjectURL(file)} width="100%" />}
                  {file && post && (
                    <ProgressBar data={data} file={file} setFile={setFile} bgcolor="#00d68f" folder="howWeHelp" />
                  )}
                </ImgPreview>
                <Button style={{ marginTop: '1rem' }} type="submit" status="Success" fullWidth onClick={handleSubmit}>
                  Update
                </Button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default FSC;
