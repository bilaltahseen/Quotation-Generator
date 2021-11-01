import { PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import QoutationRenderer from './QoutationRenderer';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Props {
  show: boolean;
  _handleClose(): void;
  projectName: string;
  projectDescription: string;
  projectQotationList: Feature[];
  projectClientName: string;
  projectPrice: string;
}

const ProjectQotationPDFDialog = ({
  show,
  _handleClose,
  projectName,
  projectDescription,
  projectQotationList,
  projectClientName,
  projectPrice,
}: Props) => {
  const [confirmed, setConfirmed] = useState(false);

  const _handleConfirmed = () => {
    setConfirmed(true);
  };

  const _cancelConfirmed = () => {
    setConfirmed(false);
    _handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={_cancelConfirmed}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Download Quotation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {confirmed && show ? (
          <PDFDownloadLink
            document={
              <QoutationRenderer
                projectName={projectName}
                projectDescription={projectDescription}
                projectQotationList={projectQotationList}
                projectClientName={projectClientName}
                projectPrice={projectPrice}
              />
            }
            fileName={`${projectName}.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? <Spinner animation='border' /> : 'Download My Qotation'
            }
          </PDFDownloadLink>
        ) : (
          'Your quotation is ready.'
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={_cancelConfirmed}>
          Back
        </Button>
        <Button onClick={_handleConfirmed} variant='primary'>
          Are you sure you want to download ?
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectQotationPDFDialog;
