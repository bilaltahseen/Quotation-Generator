import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface ProjectFileType {
  projectName: string;
  projectClient: string;
  projectDescription: string;
  projectFeatures: Feature[];
  projectPricing: string;
  projectCreationDate: string;
}

interface Props {
  showFileDialog: boolean;
  _handleFileLoad(project: ProjectFileType): void;
  _handleFileClose(): void;
}

const ProjectFileLoadDialog = ({
  showFileDialog,
  _handleFileClose,
  _handleFileLoad,
}: Props) => {
  const _getFileFromInput = (file: File): Promise<any> => {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.readAsBinaryString(file); // here the file can be read in different way Text, DataUrl, ArrayBuffer
    });
  };

  const _handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = Object(event.currentTarget.files)[0];
    _getFileFromInput(file)
      .then((binary) => {
        const json = JSON.parse(binary);
        const keys = [
          'projectName',
          'projectClient',
          'projectDescription',
          'projectFeatures',
          'projectPricing',
          'projectCreationDate',
        ];
        const jsonKeys = Object.keys(json);
        if (JSON.stringify(jsonKeys) === JSON.stringify(keys)) {
          if (
            JSON.stringify(Object.keys(json['projectFeatures'][0])) ===
            JSON.stringify(['id', 'title', 'description'])
          ) {
            _handleFileLoad(json);
          } else {
            alert('Invalid File');
          }
        } else {
          alert('Invalid File');
        }
        // console.log(json instanceof )
      })
      .catch(console.error);
  };

  return (
    <Modal
      show={showFileDialog}
      onHide={_handleFileClose}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Load File</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formFile' className='mb-3'>
            <Form.Label>Open the File</Form.Label>
            <Form.Control
              required
              onChange={_handleFileChange}
              type='file'
              accept='application/JSON'
              maxLength={1}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={_handleFileClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectFileLoadDialog;
