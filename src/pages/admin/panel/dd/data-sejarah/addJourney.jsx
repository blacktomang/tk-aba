import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import { InputGroup } from '@paljs/ui/Input';
import Layout from 'MyLayouts';
import Row from '@paljs/ui/Row';
import { Button } from '@paljs/ui/Button';
import ProgressBar from '../../../../../components/progressbar/progress-bar.component';
import AddString from '../../../../../components/context/addString';
import { Modal } from 'react-responsive-modal';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Toastr, ToastrRef } from '@paljs/ui/Toastr';
import { Spinner } from '@paljs/ui';

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
  const router = useRouter();
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(false);
  const [url, setUrl] = useState('');
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const toastrRef = useRef();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const types = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/jpg'];

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
      setError('Pastikan format foto anda .png, .jpg, .svg, atau .jpeg');
    }
    console.log(selected.type);
  };

  console.log(url);
  const addNewCard = (e) => {
    e.preventDefault();
    try {
      setData({
        title: name,
        desc: e.target.desc.value,
      });
    } catch (err) {
      alert(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPost(!post);
    await Promise.resolve(() => {
      if (url.length > 0) {
        AddString({
          folder: 'journey',
          data: {
            title: name,
            description: role,
            url: url,
          },
        });
      }
    });
    setTimeout( () => {
      setPost(false);
       toastrRef.current?.add("Tambah data berhasil!", "Status", { duration: 0, hasIcon: true });
      setTimeout(() => {
        router.back();
      }, 1000);
    }, 2000);
    setLoading(false);
  };

  console.log(name);

  return (
    <>
      <Layout title="Tambah Data Sejarah">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          center
          classNames={{
            modal: 'customModal',
          }}
        >
          <Toastr
            ref={toastrRef}
            position="topStart"
            status="Success"
            duration={3000}
            hasIcon={false}
            destroyByClick={false}
            preventDuplicates
          />
          <h4>Mohon perhatikan rasio foto agar hasilnya maksimal</h4>
          <p>Saran rasio = 350 : 200</p>
          <p>pixel = 350 x 200</p>
          <p>Contoh</p>
          {
            loading && <Spinner/>
          }
          <Image src="/images/contoh.png" width={199} height={202} alt="contoh gambar" />
        </Modal>
        <Row center>
          <Col breakPoint={{ xs: 6 }}>
            <Card>
              <header>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Tambah Data Baru</span>
                  <div style={{ display: 'flex' }} onClick={() => setOpen(true)}>
                    Click Me :(
                  </div>
                </div>
              </header>

              <CardBody>
                <form method="Post" onSubmit={handleSubmit}>
                  <Input fullWidth>
                    <input type="text" placeholder="Tahun" name="title" onChange={(e) => setName(e.target.value)} />
                  </Input>
                  <Input fullWidth>
                    <textarea
                      type="text"
                      placeholder="Deskripsi"
                      name="desc"
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </Input>
                  <label>
                    <Button type="button" status="Primary" fullWidth onClick={getImage}>
                      Foto
                    </Button>
                    <Inputfile
                      id="inputfile"
                      type="file"
                      accept="'image/png', 'image/jpeg', 'image/svg+xml', 'image/jpg'"
                      onChange={fileChange}
                      ref={fileRef}
                    />
                  </label>
                  <ImgPreview center>
                    {error && <>{error}</>}
                    {file && <img src={URL.createObjectURL(file)} width="100%" />}
                    {file && post && (
                      <ProgressBar
                        data={{
                          title: name,
                          desc: role,
                        }}
                        file={file}
                        setFile={setFile}
                        bgcolor="#00d68f"
                        folder="journey"
                        setUrl={setUrl}
                      />
                    )}
                  </ImgPreview>
                  <Button style={{ marginTop: '1rem' }} type="submit" status="Success" fullWidth onClick={handleSubmit}>
                    Create
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


