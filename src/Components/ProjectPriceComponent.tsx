import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

interface Props {
  projectPrice: string;
  setProjectPrice: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectPriceComponent = ({ projectPrice, setProjectPrice }: Props) => {
  return (
    <div className='bg-white rounded-3 p-4 shadow-sm'>
      <div className='title-header rounded-3  p-3'>
        <h2>Project Pricing</h2>
        <small>Type your project price (eg:recurring or fixed).</small>
      </div>
      <br />
      <Form>
        <Row>
          <Col lg={8}>
            <Form.Group className='mb-3'>
              <strong>
                <Form.Label>Project Price</Form.Label>
              </strong>
              <Form.Control
                className='title-field'
                style={{ border: '2px solid #000' }}
                type='text'
                onChange={(event) => setProjectPrice(event.currentTarget.value)}
                value={projectPrice}
                placeholder='Project Price'
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProjectPriceComponent;
