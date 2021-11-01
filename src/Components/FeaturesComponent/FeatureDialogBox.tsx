import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Props {
  featureName: string;
  show: boolean;
  _handleClose(): void;
  _descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  description: string;
  _addFeatureHandler(): void;
}

const FeatureDialogBox = ({
  show,
  featureName,
  description,
  _handleClose,
  _descriptionHandler,
  _addFeatureHandler,
}: Props) => {
  return (
    <Modal show={show} onHide={_handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{featureName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <strong>
              <Form.Label>Description</Form.Label>
            </strong>
            <Form.Control
              required
              as='textarea'
              onChange={_descriptionHandler}
              className='title-field'
              style={{ border: '2px solid #000' }}
              type='text'
              value={description}
              placeholder='Feature Description'
            />
            <Form.Text className='text-muted'>
              Provide basic description on the feature.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={_handleClose}>
          Close
        </Button>
        <Button onClick={_addFeatureHandler} variant='primary'>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(FeatureDialogBox);
