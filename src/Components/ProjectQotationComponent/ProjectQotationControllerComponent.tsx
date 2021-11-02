import { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ProjectQotationPDFDialog from './ProjectQotationPDFDialog';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Props {
  projectName: string;
  projectDescription: string;
  projectQotationList: Feature[];
  projectClientName: string;
  projectPrice: string;
  _handFileSave(): void;
}

const ProjectQotationControllerComponent = ({
  projectName,
  projectDescription,
  projectQotationList,
  projectClientName,
  projectPrice,
  _handFileSave,
}: Props) => {
  const [show, setShowModal] = useState(false);

  const _handleOpen = () => {
    if (
      projectName &&
      projectDescription &&
      projectQotationList.length > 0 &&
      projectPrice
    ) {
      setShowModal(true);
    }
  };
  const _handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <ProjectQotationPDFDialog
        _handleClose={_handleClose}
        show={show}
        projectName={projectName}
        projectDescription={projectDescription}
        projectQotationList={projectQotationList}
        projectClientName={projectClientName}
        projectPrice={projectPrice}
      />
      <div className='d-flex justify-content-end'>
        <OverlayTrigger
          placement='left'
          overlay={
            projectName &&
            projectDescription &&
            projectQotationList.length > 0 &&
            projectPrice ? (
              <></>
            ) : (
              <Tooltip id='tooltip-disabled'>
                Fill all the required details!
              </Tooltip>
            )
          }
        >
          <span className='d-inline-block'>
            <Button
              variant='success'
              onClick={_handleOpen}
              disabled={
                projectName &&
                projectDescription &&
                projectQotationList.length > 0 &&
                projectPrice
                  ? false
                  : true
              }
            >
              Generate
            </Button>
            <Button
              className='mx-2'
              variant='success'
              onClick={_handFileSave}
              disabled={
                projectName &&
                projectDescription &&
                projectQotationList.length > 0 &&
                projectPrice
                  ? false
                  : true
              }
            >
              Save
            </Button>
          </span>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default ProjectQotationControllerComponent;
