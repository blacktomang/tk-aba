import {Button, Card, CardBody, CardHeader, Col, EvaIcon, Row, Spinner, Toastr } from '@paljs/ui';
import Layout from 'MyLayouts';
import React, { createRef, Fragment, useEffect, useRef, useState } from 'react';
import useFirestore from '../../../../../components/context/useFirestore';
import { myLoader } from '../../../../../ImageLoader/loader';
import Image from 'next/image';
import { db, timeStamp } from '../../../../../firebase/firebase';
import { deleteFromUrls, uploadImagesnGetURLS } from '../../../../../service/storage';
import { useRouter } from 'next/router';
function index() {
  let initialValue = [
    {
      createAt: { seconds: 1628519236, nanoseconds: 864000000 },
      url: '',
      id: '',
    },
  ];
  const [data, setData] = useState(initialValue);
  const toasref = useRef(null);
  const [checkedFoto, setCheckedPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [index, setIndex] = useState(0);
  const router = useRouter();
  useEffect(() => {
    getData();
    return () => getData();
  }, []);

  console.log(files);
  const getData = async () => {
    const oke = await db.collection('galeri').get();
    setData(
      oke.docs.map((d) => {
        return { ...d.data(), id: d.id };
      }),
    );
    setLoading(false);
  };
  console.log('dataaaaa', data);


  const uploadImages = async () => {
    setImageLoading(true);
    if (files.length === 0) {
      toasref.current?.add('Pilih satu atau lebih foto untuk upload!', 'Status', { duration: 2000, hasIcon: true });
      setImageLoading(false);
      return;
    }
    try {
      const url = await uploadImagesnGetURLS(files, 'galeri');
      if (url.length > 0) {
        await Promise.all(url).then((datah) => {
          datah.forEach(async (v) => {
            await db.collection('galeri').add({
              url: v,
              createAt:timeStamp
            });
          });
        });
      }
      toasref.current?.add(`${files.length} Foto berhasil diupload!'`, 'Status', { duration: 2000, hasIcon: true });
    } catch (error) {
      toasref.current?.add('Foto gagal diupload!', 'Status', { duration: 2000, hasIcon: true });
    } finally {
      setImageLoading(false);
    }
  };
  const refFileInput = createRef();
  return (
    <Fragment>
      <Layout title="Galeri | TK ABA ">
              <Toastr ref={toasref} />
        <Row>
          <Col breakPoint={{ xs: 12, xl: 12, md: 12 }}>
            <Card accent="Primary">
              {imageLoading && <Spinner status="Danger" />}
              <CardHeader>
                <Row around>
                  <h6>Tambah Foto Kegiatan TK dll</h6>

                  <Button onClick={() => refFileInput.current?.click()}>Pilih foto</Button>
                  <input
                    type="file"
                    id="#getphoto"
                    hidden
                    ref={refFileInput}
                    accept="image/*"
                    onChange={(e) => setFiles(e.target.files)}
                    multiple
                    // type="file[]"
                  />
                  <Button onClick={uploadImages} disabled={files.length===0}>Upload</Button>
                </Row>
              </CardHeader>
              <CardBody>
                {files.length > 0 ? (
                  <Row around>
                    {Array.prototype.map.call(files, (data) => {
                      return (
                        <Card>
                          <CardHeader>
                            <Row>
                              <div style={{ cursor: 'pointer' }} onClick={() => setFiles((datah) => {
                                return Array.prototype.filter.call(datah, (item)=>data!==item)
                              })}>
                                <EvaIcon
                                  name="checkmark-circle-2-outline"
                                  status={checkedFoto.includes(data) ? 'Success' : 'Basic'}
                                />
                              </div>
                            </Row>
                          </CardHeader>
                          <CardBody>
                            <img
                              alt={data.name}
                              key={data.name + data.size.toString()}
                              src={URL.createObjectURL(data)}
                              width={300}
                              height={175}
                            />
                          </CardBody>
                        </Card>
                      );
                    })}
                  </Row>
                ) : (
                  <p>Pilih satu atau lebih foto</p>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </Fragment>
  );
}

export default index;