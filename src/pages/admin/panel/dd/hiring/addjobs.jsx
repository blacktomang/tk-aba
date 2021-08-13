import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import { InputGroup } from '@paljs/ui/Input';
import Layout from 'MyLayouts';
import Row from '@paljs/ui/Row';
import { Button } from '@paljs/ui/Button';
import { db } from '../../../../../firebase/firebase';
import firebase from 'firebase';
import { Editor } from '@tinymce/tinymce-react';
import produce from 'immer';
import { nanoid } from 'nanoid';

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;
const style = {
  marginTop: '1rem',
};

function Jobs() {
  const [title, setTitle] = useState('');
  const [positions, setPositions] = useState([{ id: '5', positionName: 'position' }]);
  const [overview, setOverview] = useState('');
  const [requirements, setRequirements] = useState([{ id: '5', requirementName: 'requirement' }]);
  const [email, setEmail] = useState('');

  const handleEditorChange = (content, _editor) => {
    setOverview(_editor.getContent());
  };
  const addJobs = (e) => {
    e.preventDefault();
    const getPositions = () => {
      return positions.map((item) => item.positionName);
    };
    const getRequirements = () => {
      return requirements.map((item) => item.requirementName);
    };
    try {
      db.collection('jobs').add({
        title: title,
        overview: overview,
        email: email,
        positions: getPositions(),
        requirements: getRequirements(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Layout title="Add Jobs">
        <Row>
          <Col breakPoint={{ xs: 12 }}>
            <Card>
              <header>Add New Job</header>
              <CardBody>
                <Row>
                  <Col breakPoint={{ xl: 12 }}>
                    <Row>
                      <Col breakPoint={{ xl: 6 }}>
                        <Input fullWidth status="Info">
                          <input
                            type="text"
                            placeholder="Job Title"
                            name="title"
                            onBlur={(e) => setTitle(e.target.value)}
                          />
                        </Input>
                      </Col>
                      <Col breakPoint={{ xl: 6 }}>
                        <Input fullWidth status="Info">
                          <input
                            type="text"
                            placeholder="email "
                            name="title"
                            onBlur={(e) => setEmail(e.target.value)}
                          />
                        </Input>
                      </Col>
                    </Row>
                    <Editor
                      apiKey="b77psby9ah5vvc1tqe4ny53m2of36i0f16zwnrrohxtljygy"
                      tagName="input"
                      initialValue="<p>This is the initial content of the editor</p>"
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          'advlist autolink lists link image charmap print preview anchor',
                          'searchreplace visualblocks code fullscreen',
                          'insertdatetime media table paste code help wordcount',
                        ],
                        toolbar:
                          'undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help',
                      }}
                      onBlur={handleEditorChange}
                    />
                  </Col>
                  <Col breakPoint={{ xl: 6 }}>
                    <Card>
                      <header>Positions</header>
                      <CardBody>
                        {positions.map((item, i) => (
                          <Input fullWidth key={item.id}>
                            <input
                              type="text"
                              key={item.id}
                              placeholder={'position' + ' ' + (i + 1)}
                              name="positions"
                              onBlur={(e) => {
                                const currentName = e.target.value;
                                setPositions((curretPosition) =>
                                  produce(curretPosition, (v) => {
                                    v[i].positionName = currentName;
                                  }),
                                );
                              }}
                            />
                          </Input>
                        ))}
                        <Button
                          shape="SemiRound"
                          appearance="filled"
                          status="Basic"
                          onClick={() => {
                            setPositions((curretPosition) => [
                              ...curretPosition,
                              {
                                id: nanoid(5),
                                positionName: '',
                              },
                            ]);
                          }}
                        >
                          New Position
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col breakPoint={{ xl: 6 }}>
                    <Card>
                      <header>Requirements</header>
                      <CardBody>
                        {requirements.map((item, i) => (
                          <Input fullWidth key={item.id}>
                            <input
                              onBlur={(e) => {
                                const currentName = e.target.value;
                                setRequirements((currentRequirement) =>
                                  produce(currentRequirement, (v) => {
                                    v[i].requirementName = currentName;
                                  }),
                                );
                              }}
                              placeholder={'requirement' + ' ' + (i + 1)}
                            />
                          </Input>
                        ))}
                        <Button
                          shape="SemiRound"
                          appearance="filled"
                          status="Basic"
                          onClick={() => {
                            setRequirements((curretPosition) => [
                              ...curretPosition,
                              {
                                id: nanoid(5),
                                requirementName: '',
                              },
                            ]);
                          }}
                        >
                          Add Requirement
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col style={style}>
                    <Button fullWidth appearance="filled" status="Success" onClick={(e) => addJobs(e)}>
                      add new job
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Jobs;
