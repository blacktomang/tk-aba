import Layout from 'MyLayouts';
import React, {useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, InputGroup, Row, Select } from '@paljs/ui';
import { Editor } from '@tinymce/tinymce-react';
import AddString from '../../../../../../components/context/addString';

const statusOption = [
  { value: 'problems', label: 'Problem' },
  { value: 'solutions', label: 'Solution' },
];

function AddNew() {
  const [data, setData] = useState(null);
  const [desc, setDesc] = useState('');

  const handleDescriptionChange = (content, _editor) => {
    setDesc(_editor.getContent());
  };

  const createNewCard = (e) => {
    e.preventDefault();

    setData({
      title: e.target.title.value,
      desc: desc,
      is: e.target.is.value,
    });
  };
  console.log(data);
  return (
    <Layout title="Add New Problems and Solution Card">
      <Row center>
        <Col breakPoint={{ xs: 6 }}>
          <Card style={{ minHeight: '300px' }}>
            <CardHeader>
              <header>Problem or Solution</header>
            </CardHeader>
            <CardBody>
              <form action="" onSubmit={createNewCard}>
                <InputGroup fullWidth style={{ marginBottom: '.5rem' }} status="Primary">
                  <input type="text" placeholder="title" name="title" />
                </InputGroup>
                <Editor
                  apiKey="b77psby9ah5vvc1tqe4ny53m2of36i0f16zwnrrohxtljygy"
                  tagName="input"
                  textareaName="desc"
                  initialValue="description"
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
                  onBlur={handleDescriptionChange}
                />
                <Select options={statusOption} placeholder="Problem or Solution" name="is" fullWidth />
                <Button status="Info" type="submit" style={{ marginTop: '.5rem' }}>
                  Create
                </Button>
              </form>
              {data && <AddString folder="problemSolutions" data={data} />}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
export default AddNew;
