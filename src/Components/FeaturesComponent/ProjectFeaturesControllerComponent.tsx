import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import FeatureDialogBox from './FeatureDialogBox';
import FeatureEditDialogBox from './FeatureEditDialogBox';
import FeatureListComponent from './FeatureListComponent';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Props {
  _handleOpen(event: React.FormEvent<HTMLFormElement>): void;
  setFeatureName: React.Dispatch<React.SetStateAction<string>>;
  featureName: string;
  featuresList: Feature[];
  dialogState: boolean;
  description: string;
  editFeatureName: string;
  editFeatureDescription: string;
  editDialogState: boolean;
  _deleteHandler(id: number): void;
  _handleOpenEdit({ id, title, description }: Feature): void;

  _handleClose(): void;
  _descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  _addFeatureHandler(): void;
  _handlCloseEdit(): void;
  _editFeatureHandler(): void;
  _descriptionHandlerEdit(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  _featureHandlerEdit(event: React.ChangeEvent<HTMLInputElement>): void;
}

const ProjectFeaturesControllerComponent = ({
  featureName,
  featuresList,
  dialogState,
  description,
  editFeatureName,
  editFeatureDescription,
  editDialogState,
  setFeatureName,
  _handleOpen,
  _deleteHandler,
  _handleOpenEdit,

  _handleClose,
  _descriptionHandler,
  _addFeatureHandler,
  _handlCloseEdit,
  _editFeatureHandler,
  _descriptionHandlerEdit,
  _featureHandlerEdit,
}: Props) => {
  return (
    <div className='bg-white rounded-3 p-4 shadow-sm'>
      <FeatureDialogBox
        featureName={featureName}
        show={dialogState}
        _handleClose={_handleClose}
        description={description}
        _descriptionHandler={_descriptionHandler}
        _addFeatureHandler={_addFeatureHandler}
      />
      <FeatureEditDialogBox
        featureName={editFeatureName}
        description={editFeatureDescription}
        show={editDialogState}
        _handlCloseEdit={_handlCloseEdit}
        _descriptionHandlerEdit={_descriptionHandlerEdit}
        _featureHandlerEdit={_featureHandlerEdit}
        _editFeatureHandler={_editFeatureHandler}
      />

      <div className='title-header rounded-3  p-3'>
        <h2>Project Features</h2>
        <small>
          Click add Feature and type feature name , details and price
        </small>
      </div>
      <br />
      <Form onSubmit={_handleOpen}>
        <Row className='align-items-center'>
          <Col>
            <Form.Group className='mb-3'>
              <strong>
                <Form.Label>Feature Name</Form.Label>
              </strong>
              <Form.Control
                required
                onChange={(event) => setFeatureName(event.currentTarget.value)}
                className='title-field'
                style={{ border: '2px solid #000' }}
                type='text'
                value={featureName}
                placeholder='Feature Name'
              />
            </Form.Group>
          </Col>
          <Col className='mt-3'>
            <Button type='submit' className='add-button'>
              +
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      <h1>Current in List</h1>
      <FeatureListComponent
        _handleOpenEdit={_handleOpenEdit}
        _deleteHandler={_deleteHandler}
        featuresList={featuresList}
      />
      <br />
    </div>
  );
};

export default ProjectFeaturesControllerComponent;
