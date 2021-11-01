import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
interface Props {
  featureName: string;
  description: string;
  show: boolean;
  _handlCloseEdit(): void;
  _editFeatureHandler(): void;
  _descriptionHandlerEdit(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  _featureHandlerEdit(event: React.ChangeEvent<HTMLInputElement>): void;
}

const FeatureEditDialogBox = ({
  featureName,
  description,
  show,
  _handlCloseEdit,
  _descriptionHandlerEdit,
  _featureHandlerEdit,
  _editFeatureHandler,
}: Props) => {
  return (
    <Modal
      show={show}
      onHide={_handlCloseEdit}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{featureName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <strong>
              <Form.Label>Feature Name</Form.Label>
            </strong>
            <Form.Control
              required
              onChange={_featureHandlerEdit}
              className='title-field'
              style={{ border: '2px solid #000' }}
              type='text'
              value={featureName}
              placeholder='Feature Name'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <strong>
              <Form.Label>Description</Form.Label>
            </strong>
            <Form.Control
              required
              as='textarea'
              onChange={_descriptionHandlerEdit}
              className='title-field'
              style={{ border: '2px solid #000' }}
              type='text'
              value={description}
              placeholder='Feature Description'
            />
            <Form.Text className='text-muted'>
              Edit basic description on the feature.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={_handlCloseEdit}>
          Close
        </Button>
        <Button onClick={_editFeatureHandler} variant='primary'>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FeatureEditDialogBox;
