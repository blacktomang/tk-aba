import React, { Fragment, useEffect, useRef } from 'react';
import { Button, Card, CardBody, CardHeader, Col, EvaIcon, Progress, Row, Spinner, Toastr } from '@paljs/ui';
// import useFirestore from './context/useFirestore';
import { useState } from 'react';
import { myLoader } from '../../ImageLoader/loader';
import { InputGroup } from '@paljs/ui/Input';
import { db, timeStamp } from '../../firebase/firebase';
import items from 'MyLayouts/menuItem';
import Image from 'next/image';
import { Icon } from '@paljs/ui/Icon';
import styled from 'styled-components';
import { deleteFromUrl, uploadImagenGetURL } from 'service/storage';

function BannerData({ collection, belongsTo }) {
  let initialValue = {
    desc: '',
    belongsTo: '',
    title: '',
    url: '',
    createdAt: { seconds: 1628519236, nanoseconds: 864000000 },
    updatedAt: { seconds: 1628519236, nanoseconds: 864000000 },
    id: '',
  };
  const [data, setData] = useState(initialValue);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toastrRef = useRef(null);
  const [loadingImage, setLoadingImage] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setIsLoading(true);
    const re = await db.collection(collection).where('belongsTo', '==', belongsTo).get();
    setData(() => {
      const array = re.docs;
      for (let i = 0; i < array.length; i++) {
        if (i < 1) {
          return { ...array[i].data(), id: array[i].id };
        }
      }
    });
    setIsLoading(false);
  };

    const updateData = async () => {
      setLoadingImage(true);
      try {
        await db.collection(collection).doc(data.id).update(data);
        toastrRef.current?.add('Update Data Berhasil', 'Update Data', 'topEnd', 'Success', 2000, true, true, false);
      } catch (error) {
        toastrRef.current?.add('Update Data Gagal', 'Failed!', 'topEnd', 'Danger', 2000, true, true, false);
        console.log(error);
      } finally {
        setLoadingImage(false);
      }
    };
  const handleChange = (event) => {
    let { name, value } = event.target;
    let newValues = {
      ...data,
      [name]: value,
    };

    setData(newValues);
  };

  const updateImage = async (e) => {
    let file = e.target.files[0];
    const types = ['image/jpeg', 'image/svg+xml', 'image/png', 'image/jpg', 'image/png'];
    if (!types.includes(file.type)) {
      toastrRef.current?.add(
        'Pastikan file yang anda upload adalah gambar',
        'Error',
        'topEnd',
        'Primary',
        2000,
        true,
        true,
        false,
      );
      return;
    }
    setLoadingImage(true);
    try {
      const res = await deleteFromUrl(data.url);
      if (res == 1) {
        const urlh = await uploadImagenGetURL(file, 'banners');
        console.log(urlh);
        await db
          .collection(collection)
          .doc(data.id)
          .update({
            ...data,
            url: urlh,
            // desc:`<p>${data.desc}</p>`,
            updatedAt: timeStamp,
          })
          .catch((e) => console.log(e))
          .finally(() => {
            setData({
              ...data,
              url: urlh,
              updatedAt: timeStamp,
            });
          });
        toastrRef.current?.add('Update Data Berhasil', 'Success!', 'topEnd', 'Primary', 2000, true, true, false);
      }
    } catch (error) {
      toastrRef.current?.add('Update Data Gagal', 'Failed!', 'topEnd', 'Danger', 2000, true, true, false);
      print(error);
    } finally {
      setLoadingImage(false);
    }
  };
  return (
    <Card accent="Primary">
      {loadingImage && <Spinner />}
      <Toastr ref={toastrRef} />
      <CardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <header>Banner</header>
            <p>Halaman untuk atur Banner di setiap halaman</p>
          </div>
          <Button status="Success" onClick={updateData}>
            Update
          </Button>
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(51, 102, 255, .2)',
              borderRadius: '50%',
              width: '45px',
              justifyContent: 'center',
              // color: 'white',
            }}
            onClick={() => setIsEdit(!isEdit)}
          >
            <EvaIcon className="icon" name="edit-2-outline" />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        {isLoading ? (
          <Spinner />
        ) : (
          <Col breakPoint={{ md: 12 }}>
            <Row>
              <Col breakPoint={{ xl: 6, md: 6, xs: 12, sm: 12 }}>
                <label htmlFor="#title">
                  <p>
                    <strong>Foto Banner</strong>
                  </p>
                </label>
                <Image
                  src={data.url.length > 1 ? data.url : '/images/logo.jpg'}
                  height={100}
                  width={100}
                  loader={myLoader}
                />
                {isEdit ? (
                  <InputGroup status={'Primary'}>
                    <input
                      type="file"
                      accept="image/*"
                      // value={data.logo}
                      id="title"
                      name="url"
                      onChange={(e) => updateImage(e)}
                    />
                  </InputGroup>
                ) : (
                  ''
                )}
              </Col>
                <Col breakPoint={{ xl: 12, md: 12, xs: 12, sm: 12 }}>
                  <label htmlFor="#title">
                    <p>
                      <strong>Judul</strong>
                    </p>
                  </label>
                  <InputGroup status={isEdit ? 'Primary' : 'Basic'} fullWidth style={{ marginBottom: 10 }}>
                    <textarea
                      placeholder="Text Area"
                      readOnly={!isEdit}
                      value={data.title}
                      id="title"
                      name="title"
                      rows="1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <label htmlFor="#desc">
                    <p>
                      <strong>Sub Judul</strong>
                    </p>
                  </label>
                  <InputGroup status={isEdit ? 'Primary' : 'Basic'} fullWidth style={{ marginBottom: 10 }}>
                    <textarea
                      placeholder="Text Area"
                      readOnly={!isEdit}
                      value={data.desc}
                      id="desc"
                      name="desc"
                      rows="5"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
            </Row>
          </Col>
        )}
      </CardBody>
    </Card>
  );
}

export default BannerData;
