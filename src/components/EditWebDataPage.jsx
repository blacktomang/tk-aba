import React, { Fragment, useEffect, useRef } from 'react';
import { Button, Card, CardBody, CardHeader, Col, EvaIcon, Progress, Row, Spinner, Toastr } from '@paljs/ui';
import useFirestore from './context/useFirestore';
import { useState } from 'react';
import {myLoader} from '../ImageLoader/loader';
import { InputGroup } from '@paljs/ui/Input';
import { db, timeStamp } from 'firebase/firebase';
import items from 'MyLayouts/menuItem';
import Image from 'next/image';
import { Icon } from '@paljs/ui/Icon';
import styled from 'styled-components';
import { deleteFromUrl, uploadImagenGetURL } from 'service/storage';


const UpdateButton = styled(Button)`
/* position: absolute; */

`



function EditWebDataPage( { collection }) {
  let initialValue = {
    address: '',
    city: '',
    contact: '',
    createdAt: { seconds: 1628562060, nanoseconds: 0 },
    updatedAt: { seconds: 1628562060, nanoseconds: 0 },
    id: '',
    intro: '',
    introImg: '',
    logo: '',
    name: '',
  };
  const [data, setData] = useState(initialValue);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toastrRef = useRef(null);
  const [loadingImage, setLoadingImage] = useState(false);
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    setIsLoading(true);
    const re = await db.collection(collection).get();
    setData(() => {
      const array = re.docs;
      for (let i = 0; i < array.length; i++) {
        if (i<1) {
          return {...array[i].data(), id : array[i].id};
        }
      }
    })
    setIsLoading(false);
  }
    const handleChange = (event) => {
      let { name, value } = event.target;

     
      let newValues = {
        ...data,
        [name]: value,
      };

      setData(newValues);
    };
  
  const updateImage = async (e, type) => {
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
      const res = await deleteFromUrl(type === 0 ? data.logo : data.introImg);
      if (res == 1) {
        const urlh = await uploadImagenGetURL(file, 'web-images');
        console.log(urlh);
        console.log(type);
        await db
          .collection('web-info')
          .doc(data.id)
          .update({
            ...data,
            logo: type === 0 ? urlh : data.logo,
            introImg: type === 1 ? urlh : data.introImg,
            updatedAt:timeStamp
          }).catch((e) => console.log(e)).finally(() => {
            setData({
              ...data,
              logo: type === 0 ? urlh : data.logo,
              introImg: type === 1 ? urlh : data.introImg,
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

  const updateData = async () => {
    setLoadingImage(true);
    try {
      await db.collection("web-info").doc(data.id).update(data);
       toastrRef.current?.add(
         'Update Data Berhasil',
         'Update Data',
         'topEnd',
         'Success',
         2000,
         true,
         true,
         false,
       );
    } catch (error) {
       toastrRef.current?.add('Update Data Gagal', 'Failed!', 'topEnd', 'Danger', 2000, true, true, false);
      console.log(error)
    } finally {
      setLoadingImage(false);
    }
  }
  return (
      <Card accent="Primary">
      {loadingImage && <Spinner />}
        <Toastr ref={toastrRef} />
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <header>Web Data</header>
              <p>Halaman untuk mengatur logo, alamat, kontak, dan nama sekolah</p>
            </div>
            <UpdateButton status="Success" onClick={updateData}>
              Update
            </UpdateButton>
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
                      <strong> Logo </strong>
                    </p>
                  </label>
                  <Image
                    src={data.logo.length > 1 ? data.logo : '/images/logo.jpg'}
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
                        name="logo"
                        onChange={(e) => updateImage(e, 0)}
                      />
                    </InputGroup>
                  ) : (
                    ''
                  )}
                </Col>
                <Col breakPoint={{ xl: 6, md: 6, xs: 12, sm: 12 }}>
                  <label htmlFor="#school">
                    <p>
                      <strong>Judul / Nama Sekolah</strong>
                    </p>
                  </label>
                  <InputGroup status={isEdit ? 'Primary' : 'Basic'} fullWidth style={{ marginBottom: 10 }}>
                    <input
                      type="text"
                      readOnly={!isEdit}
                      value={data.name}
                      id="school"
                      name="name"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <label htmlFor="#address">
                    <p>
                      <strong>Address</strong>
                    </p>
                  </label>
                  <InputGroup status={isEdit ? 'Primary' : 'Basic'} fullWidth style={{ marginBottom: 10 }}>
                    <input
                      type="text"
                      readOnly={!isEdit}
                      value={data.address}
                      id="address"
                      name="address"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <label htmlFor="#city">
                    <p>
                      <strong>Kota</strong>
                    </p>
                  </label>
                  <InputGroup status={isEdit ? 'Primary' : 'Basic'} fullWidth style={{ marginBottom: 10 }}>
                    <input
                      type="text"
                      readOnly={!isEdit}
                      value={data.city}
                      id="city"
                      name="city"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xl: 6, md: 6, xs: 12, sm: 12 }}>
                  <label htmlFor="#introImg">
                    <p>
                      <strong>Gambar Perkenalan</strong>
                    </p>
                  </label>
                  <Image
                    src={data.introImg.length > 1 ? data.introImg : '/images/logo.jpg'}
                    width={400}
                    height={250}
                    loader={myLoader}
                  />
                  {isEdit ? (
                    <InputGroup status={'Primary'}>
                      <input
                        type="file"
                        accept="image/*"
                        // value={data.logo}
                        id="introImg"
                        name="introImg"
                        onChange={(e) => updateImage(e, 1)}
                      />
                    </InputGroup>
                  ) : (
                    ''
                  )}
                </Col>
                <Col breakPoint={{ xl: 6, md: 6, xs: 12, sm: 12 }}>
                  <label htmlFor="#intro">
                    <p>
                      <strong>Perkenalan Sekolah</strong>
                    </p>
                  </label>
                  <InputGroup status={isEdit ? 'Primary' : 'Basic'} fullWidth style={{ marginBottom: 10 }}>
                    <textarea
                      placeholder="Text Area"
                      readOnly={!isEdit}
                      value={data.intro}
                      id="intro"
                      name="intro"
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

export default EditWebDataPage;
