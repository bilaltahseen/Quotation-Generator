import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

interface Props {
  projectName: string;
  clientName: string;
  projectDescription: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  setProjectDescrption: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectTitleComponent = ({
  projectName,
  clientName,
  projectDescription,
  setProjectName,
  setClientName,
  setProjectDescrption,
}: Props) => {
  return (
    <div className='bg-white rounded-3 p-4 shadow-sm'>
      <div className='title-header rounded-3  p-3'>
        <h2>Project Details</h2>
        <small>Type your project title and client name.</small>
      </div>
      <br />
      <Form>
        <Row>
          <Col lg={8}>
            <Form.Group className='mb-3'>
              <strong>
                <Form.Label>Project Name</Form.Label>
              </strong>
              <Form.Control
                className='title-field'
                style={{ border: '2px solid #000' }}
                type='text'
                onChange={(event) => setProjectName(event.currentTarget.value)}
                value={projectName}
                placeholder='Project Name'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <strong>
                <Form.Label>Client Name</Form.Label>
              </strong>
              <Form.Control
                className='title-field'
                style={{ border: '2px solid #000' }}
                type='text'
                onChange={(event) => setClientName(event.currentTarget.value)}
                value={clientName}
                placeholder='Client Name'
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className='mb-3'>
          <strong>
            <Form.Label>Project Description</Form.Label>
          </strong>
          <Form.Control
            className='title-field'
            as='textarea'
            rows={3}
            style={{ border: '2px solid #000' }}
            type='text'
            onChange={(event) =>
              setProjectDescrption(event.currentTarget.value)
            }
            value={projectDescription}
            placeholder='Project Description'
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProjectTitleComponent;
