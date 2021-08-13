import { Button, Card, CardBody, CardHeader, Col, EvaIcon, Row, Spinner, Toastr } from '@paljs/ui';
import Layout from 'MyLayouts';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import  useFirestore from '../../../../../components/context/useFirestore';
import { myLoader } from '../../../../../ImageLoader/loader';
import Image from 'next/image';
import { db } from '../../../../../firebase/firebase';
import { deleteFromUrls } from '../../../../../service/storage';
import { useRouter } from 'next/router';
function index() {
  let initialValue = [
    {
      createAt: { seconds: 1628519236, nanoseconds: 864000000 },
      url:
        '',
      id:''
    },
  ];
  const [data, setData] = useState(initialValue);
  const [dataForDB, setDataForDB] = useState(initialValue);
  const toasref = useRef(null);
  const [checkedFoto, setCheckedPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    getData();
    return ()=>getData();
  }, []);

  const getData = async () => {
     const oke = await db.collection('galeri').get();
    setData(oke.docs.map((d) => {
      return {...d.data(), id:d.id}
    }));
    setLoading(false);
  }
  console.log('dataaaaa', data);
  
  const [checkAllPhotos, setCheckAllPhotos] = useState(false);
  const checkAll = () => {
    setCheckAllPhotos(!checkAllPhotos);
  }
  useEffect(() => {
    checkAllPhotos && checkedFoto.length !== data.length ? setCheckedPhoto(data) : setCheckedPhoto([]);
  }, [checkAllPhotos])

  const deleteImages = async () => {
    setImageLoading(true);
    if (checkedFoto.length === 0) {
      toasref.current?.add('Pilih salah satu foto untuk menghapus!', 'Status', { duration: 2000, hasIcon: true });
      setImageLoading(false);
      return;
    }
    try {
      const res = await deleteFromUrls(checkedFoto);
      if (res == 1) {
        await Promise.all(checkedFoto).then( datah => {
          datah.forEach(async v => {
            await db.collection('galeri').doc(v.id).delete();
          })
        })
        setData((data) => {
          return data.filter((item) => !checkedFoto.includes(item));
        })
        setCheckedPhoto([]);
      }
      toasref.current?.add(`${checkedFoto.length} foto berhasil dihapus!`, 'Status', { duration: 2000, hasIcon: true });
    } catch (error) {
      toasref.current?.add('Foto gagal dihapus!', 'Status', { duration: 2000, hasIcon: true });
    } finally {
      setImageLoading(false);
    }
  }

  console.log('image',imageLoading);
  return (
    <Fragment>
      <Layout title="Galeri | TK ABA ">
        <Row>
          {imageLoading && <Spinner status="Danger" />}
          <Col breakPoint={{ xs: 12, xl: 12, md: 12 }}>
            <Card accent="Primary">
              <Toastr ref={toasref} />
              <CardHeader>
                <Row between>
                  <Col breakPoint={{ xl: 12, sm: 12, md: 3, xl: 3 }}>
                    <h6>Galeri Kegiatan TK</h6>
                  </Col>
                  <Col breakPoint={{ xl: 12, sm: 12, md: 3, xl: 3 }}>
                    <div
                      style={{
                        position: 'relative',
                        right: 0,
                        top: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                        borderTopLeftRadius: '.23rem',
                        width: 25,
                        height: 25,
                        cursor: 'pointer',
                      }}
                      onClick={deleteImages}
                    >
                      <EvaIcon name="trash-2-outline" status={checkedFoto.length < 1 ? 'Basic' : 'Danger'} />
                    </div>
                  </Col>
                  <Col breakPoint={{ xl: 12, sm: 12, md: 3, xl: 3 }}>
                    <Row onClick={checkAll} style={{ cursor: 'pointer' }}>
                      <p>Pilih Semua</p>
                      <EvaIcon
                        name="checkmark-circle-2-outline"
                        status={checkedFoto.length === data.length ? 'Primary' : 'Basic'}
                        options={{ animation: { type: 'pulse', hover: true } }}
                      />
                    </Row>
                  </Col>
                  <Col breakPoint={{ xl: 12, sm: 12, md: 3, xl: 3 }}>
                    <Button status="Primary" onClick={() => router.push(`${router.pathname}/tambahFoto`)}>
                      Tambah Foto Baru
                    </Button>
                  </Col>
                  <div
                    style={{
                      position: 'absolute',
                      backgroundColor: 'var(--first-color)',
                      left: 12,
                      top: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      color: 'white',
                      borderTopLeftRadius: '.23rem',
                      width: 25,
                      height: 25,
                    }}
                  >
                    {checkedFoto.length}
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {!loading ? (
                  <Row around>
                    {data.map((data) => {
                      return (
                        <Card>
                          <CardHeader>
                            <Row>
                              <div
                                style={{ cursor: 'pointer' }}
                                onClick={() =>
                                  setCheckedPhoto(() => {
                                    if (checkedFoto.includes(data)) {
                                      let prev = checkedFoto;
                                      return prev.filter((item) => item != data);
                                    } else {
                                      return [...checkedFoto, data];
                                    }
                                  })
                                }
                              >
                                <EvaIcon
                                  name={'checkmark-circle-2-outline'}
                                  status={checkedFoto.includes(data) ? 'Primary' : 'Basic'}
                                  options={{ animation: { type: 'pulse', hover: true } }}
                                />
                              </div>
                            </Row>
                          </CardHeader>
                          <CardBody>
                            <Image
                              key={data.createAt.nanoseconds.toString + data.createAt.seconds.toString}
                              src={data.url}
                              width={300}
                              height={175}
                              loader={myLoader}
                            />
                          </CardBody>
                        </Card>
                      );
                    })}
                  </Row>
                ) : (
                  <Spinner />
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
