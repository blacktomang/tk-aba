import Layout from 'MyLayouts';
import React, { useRef, useState } from 'react';
import ProgressBar from '../../../../../../components/progressbar/progress-bar.component';
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
import { Path } from '../../../../../../components/context/path';
import getBannerStore from '../../../../../../components/context/getBanner';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useFirestore from '../../../../../../components/context/useFirestore';
import { db } from '../../../../../../firebase/firebase';

const LocalCard = styled(Card)`
  h1 {
    font-size: 16px;
    line-height: 20px;
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

const ImgPreview = styled(Row)`
  max-width: 100%;
  margin-top: 0.5rem;
  img {
    max-width: 90%;
    border-radius: 5px;
  }
`;

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

function About() {
  const router = useRouter();
  const { docs } = useFirestore('problemSolutions');
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [subtitle, setsubTitle] = useState('');
  const { banner } = getBannerStore('banners', 'about');
  const id = banner.map((item) => item.id);

  const fileRef = useRef(null);

  const handleTitleChange = (content, _editor) => {
    setTitle(_editor.getContent());
  };
  const handleSubtitleChange = (content, _editor) => {
    setsubTitle(_editor.getContent());
  };
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [selected, setSelected] = useState('');
  const types = ['image/png', 'image/jpeg', 'image/svg', 'image/jpg'];

  const updateTitle = (e) => {
    setData({
      title: title,
      subtitle: e.target.desc.value,
      desc: subtitle,
      belongsTo: 'about',
    });
  };

  const getImage = () => {
    fileRef.current.click();
  };

  const [filesupp, setFilesupp] = useState(null);

  const fileChangeSupp = (e) => {
    setSelected(e.target.files[0]);
    if (selected && types.includes(selected.type)) {
      setFilesupp(selected);
      setError('');
    } else {
      setFilesupp(null);
      setError('Check your file format');
    }
  };

  const [filepublications, setFilepublications] = useState(null);

  const fileChangepublications = (e) => {
    setSelected(e.target.files[0]);
    if (selected && types.includes(selected.type)) {
      setFilepublications(selected);
      setError('');
    } else {
      setFilesupp(null);
      setError('Check your file format');
    }
  };

  const fileChange = (e) => {
    setSelected(e.target.files[0]);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Check your file format');
    }
  };
  const [post, setPost] = useState(null);

  const handleSubmit = () => {
    setPost(!post);
    setTimeout(() => {
      setPost(false);
    }, 5000);
  };

  const deleteCard = (id) => {
    db.collection('problemSolutions')
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
    <Layout title="About Page">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card accent="Primary">
            <CardHeader>Banner</CardHeader>
            <CardBody>
              <form action="post" onSubmit={updateTitle}>
                <span dangerouslySetInnerHTML={{ __html: banner.map((item) => item.title) }}></span>
                <Editor
                  apiKey="b77psby9ah5vvc1tqe4ny53m2of36i0f16zwnrrohxtljygy"
                  tagName="input"
                  textareaName="title"
                  initialValue={banner.map((item) => item.title)}
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
                  onBlur={handleTitleChange}
                />
                <header
                  style={{ marginTop: '1rem' }}
                  dangerouslySetInnerHTML={{ __html: banner.map((item) => item.subtitle) }}
                ></header>
                <InputGroup fullWidth status="Primary">
                  <input type="text" placeholder="edit sub title" name="desc" />
                </InputGroup>
                <header dangerouslySetInnerHTML={{ __html: banner.map((item) => item.desc) }}></header>
                <Editor
                  apiKey="b77psby9ah5vvc1tqe4ny53m2of36i0f16zwnrrohxtljygy"
                  tagName="input"
                  textareaName="subtitle"
                  initialValue={banner.map((item) => item.desc)}
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
                  onBlur={handleSubtitleChange}
                />
                <Button status="Info" onClick={updateTitle} type="button">
                  Update
                </Button>
              </form>
              {data && <Path folder="banners" data={data} id={id[0]} />}
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ lg: 12 }}>
          <Card>
            <CardHeader>
              <Row around>
                <header>Problem and Solution</header>
                <Button onClick={() => router.push(`${router.pathname}/addnew`)}>Add New</Button>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                {docs.map(({ id, title, desc, is }, index) => (
                  <Col breakPoint={{ xs: 6 }}>
                    <Card status="Info" key={index}>
                      <CardHeader>
                        <Row around>{title}</Row>
                      </CardHeader>
                      <CardBody>
                        <Tabs activeIndex={0} fullWidth>
                          <Tab title="Description" icon="icon ion-ios-star-outline" responsive>
                            <List dangerouslySetInnerHTML={{ __html: desc }}></List>
                          </Tab>
                        </Tabs>
                      </CardBody>
                      <CardFooter style={{ justifyContent: 'space-around' }}>
                        <Row around>
                          <Row around style={{ width: '50%' }}>
                            <IconWrapper color={'var(--first-color)'} className="email">
                              <p>
                                <span>{is}</span>
                              </p>
                            </IconWrapper>
                            <IconWrapper color="red" onClick={() => deleteCard(id)}>
                              <EvaIcon name="trash-outline" />
                            </IconWrapper>
                          </Row>
                        </Row>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col breakPoint={{ lg: 6 }}></Col>
        <Col breakPoint={{ lg: 6 }}>
          <Card accent="Primary">
            <header>
              <Row between>
                Support
                <Button onClick={() => router.push('/#support', '/#support', scroll)}>
                  <Tooltip
                    key={1}
                    eventListener="#scrollPlacementId"
                    className=" inline-block"
                    trigger="hint"
                    placement="top"
                    content="See Images"
                    icon="eye-outline"
                  >
                    <EvaIcon name="eye-outline" />
                  </Tooltip>
                </Button>
              </Row>
            </header>
            <CardBody>
              <label>
                <Button type="submit" status="Primary" fullWidth onClick={getImage}>
                  Support Images (384X230)
                </Button>
                <Inputfile id="inputfile" type="file" onChange={fileChangeSupp} ref={fileRef} />
              </label>
              <ImgPreview center>
                {error && <>{error}</>}
                {filesupp && <img src={URL.createObjectURL(filesupp)} width="100%" />}
                {filesupp && post && (
                  <ProgressBar
                    data={{ tagname: 'support images' }}
                    file={filesupp}
                    setFile={setFilesupp}
                    bgcolor="#00d68f"
                    folder="supports"
                  />
                )}
              </ImgPreview>
              <Button status="Info" onClick={handleSubmit} type="sumbit">
                Upload
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card accent="Primary">
            <header>
              <Row between>
                Liputan dan Publikasi (384X145)
                <Button onClick={() => router.push('/#support', '/#support', scroll)}>
                  <Tooltip
                    key={1}
                    eventListener="#scrollPlacementId"
                    className=" inline-block"
                    trigger="hint"
                    placement="top"
                    content="See Images"
                    icon="eye-outline"
                  >
                    <EvaIcon name="eye-outline" />
                  </Tooltip>
                </Button>
              </Row>
            </header>
            <CardBody>
              <label>
                <Button type="submit" status="Primary" fullWidth onClick={getImage}>
                  New Images
                </Button>
                <Inputfile id="inputfile" type="file" onChange={fileChangepublications} ref={fileRef} />
              </label>
              <ImgPreview center>
                {error && <>{error}</>}
                {filepublications && <img src={URL.createObjectURL(filepublications)} width="100%" />}
                {filepublications && post && (
                  <ProgressBar
                    data={{ tagname: 'publications images' }}
                    file={filepublications}
                    setFile={setFilepublications}
                    bgcolor="#00d68f"
                    folder="publications"
                  />
                )}
              </ImgPreview>
              <Button status="Info" onClick={handleSubmit} type="sumbit">
                Upload
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default About;
