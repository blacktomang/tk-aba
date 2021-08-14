import Layout from 'MyLayouts';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { iconRef } from '../../../../../components/consts/icon-table';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Button,
  Card,
  // CardBody,
  // CardFooter,
  CardHeader,
  Col,
  EvaIcon,
  // List,
  // ListItem,
  Row,
  // Tab,
  // Tabs,
  Tooltip,
} from '@paljs/ui';
import { db, storage } from '../../../../../firebase/firebase';
import useFirestore from '../../../../../components/context/useFirestore';
import { myLoader } from '../../../../../ImageLoader/loader';
import MaterialTable from 'material-table';
import { Modal } from 'react-responsive-modal';
import { deleteFromUrl, uploadImagenGetURL } from '../../../../../service/storage';
// import AddString from '../../../../../components/context/addString';

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

const ImageWrapper = styled.div`
  position: relative;
  width: 26%; .icon {
    z-index: 99;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
function Index() {
  const router = useRouter();
  const { docs } = useFirestore('journey');
  const [display, setDisplay] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();

  useEffect(() => {
    setLoading(true);
    setUsers(docs);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      setLoading(false);
    };
  }, [docs]);

  const deleteJob = async (oldData) => {
    try {
      const a = await storage
        .refFromURL(oldData.url)
        .delete()
        .then(() => 1)
        .catch(() => 0);
      if (a == 1) {
        db.collection('journey')
          .doc(oldData.id)
          .delete()
          .then(() => {
            alert('Document successfully deleted!');
          })
          .catch((error) => {
            alert('Error removing document: ', error);
          });
      } else {
        return;
      }
    } catch (error) {
      alert(error);
    }
  };

  const submitHandlerUpdate = async (newData, oldData) => {
    // console.log('old data ', oldData);
    console.log('new data', newData);
    try {
      await db.collection('journey').doc(newData.id).update(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const openrAndUpdateData = (data) => {
    setOpen(true);
    setData(data);
  }

  const tryUpdate = async () => {
    setLoading(true);
    try {
      const res = await deleteFromUrl(data.url);
      if (res == 1) {
        const urlh = await uploadImagenGetURL(file, "journey");
        await db.collection("journey").doc(data.id).update({
          ...data,
          url:urlh
        });
      }
    } catch (error) {
      print(error);
    }
    setLoading(false);
  }
  return (
    <>
      <Layout title="Perjalanan atau Sejarah | TK ABA ">
        <Row>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            classNames={{
              modal: 'customModal',
            }}
          >
            <h4>Mohon perhatikan rasio foto agar hasilnya maksimal</h4>
            <p>Saran rasio = 61 : 62</p>
            <p>pixel = 244 x 248</p>
            <p>Contoh</p>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={tryUpdate}>oke</button>
          </Modal>
          <Col breakPoint={{ xs: 12 }}>
            <Card accent="Primary">
              <CardHeader>
                <Row center around>
                  Daftar sejarah / pencapaian
                  <Button status="Primary" onClick={() => router.push(`${router.pathname}/addJourney`)}>
                    Tambah Data Baru
                  </Button>
                  <div style={{ position: 'relative', width: '5%' }}>
                    <Tooltip
                      eventListener="#scrollPlacementId"
                      className=" inline-block"
                      trigger="hint"
                      placement="top"
                      content="Tampilkan Foto"
                      icon="image-outline"
                    >
                      <IconWrapper color="var(--first-color)" onClick={() => setDisplay(!display)}>
                        <EvaIcon name="image-outline" />
                      </IconWrapper>
                    </Tooltip>
                  </div>
                </Row>
              </CardHeader>
              <MaterialTable
                title=""
                isLoading={loading}
                icons={iconRef}
                options={{
                  headerStyle: {
                    backgroundColor: '#254F9C',
                    color: '#ffffff',
                    fontWeight: 700,
                    zIndex: 0,
                  },
                }}
                columns={[
                  { title: 'Tahun', field: 'title' },
                  { title: 'Deskripsi', field: 'desc' },
                  {
                    title: 'Foto',
                    render: (rowData) => (
                      <ImageWrapper>
                        <div onClick={() => openrAndUpdateData(rowData)}>
                          <EvaIcon name="edit-2-outline" className="icon" status="Danger" />
                        </div>
                        <Image src={rowData.url} height={50} width={50} loader={myLoader} />,
                      </ImageWrapper>
                    ),
                  },
                ]}
                options={{
                  actionsColumnIndex: -1,
                }}
                data={users}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataUpdate = [...users];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                        setUsers([...dataUpdate]);
                        submitHandlerUpdate(newData, oldData);
                        resolve();
                      }, 1000);
                    }),
                  onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataDelete = [...users];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        deleteJob(oldData);
                        setUsers([...dataDelete]);
                        resolve();
                      }, 1000);
                    }),
                }}
              />
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Index;
