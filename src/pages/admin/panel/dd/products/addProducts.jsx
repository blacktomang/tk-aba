import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import { InputGroup } from '@paljs/ui/Input';
import Layout from 'MyLayouts';
import Row from '@paljs/ui/Row';
import { Button } from '@paljs/ui/Button';
import ProgressBar from '../../../../../components/progressbar/progress-bar.component';

const Input = styled(InputGroup)`
  margin-bottom: 10px;
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

function Invest() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(false);
  const [data, setData] = useState({});
  const [selected, setSelected] = useState('');
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
    <>
      <Layout title="Add Partner Card">
        <Row center>
          <Col breakPoint={{ xs: 6 }}>
            <Card>
              <header>Add New Partner Card</header>
              <CardBody>
                <form method="Post" onSubmit={addNewCard}>
                  <Input fullWidth>
                    <input type="text" placeholder="Title" name="title" />
                  </Input>
                  <Input fullWidth>
                    <textarea type="text" placeholder="Description" name="desc" />
                  </Input>
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
                      <ProgressBar data={data} file={file} setFile={setFile} bgcolor="#00d68f" folder="products" />
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
    </>
  );
}

export default Invest;
