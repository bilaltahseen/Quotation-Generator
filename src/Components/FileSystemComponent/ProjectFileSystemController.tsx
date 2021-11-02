import React from 'react';
import { Button } from 'react-bootstrap';
import ProjectFileLoadDialog from './ProjectFileLoadDialog';

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
  _handleFileOpen(): void;
}

const ProjectFileSystemController = ({
  showFileDialog,
  _handleFileLoad,
  _handleFileClose,
  _handleFileOpen,
}: Props) => {
  return (
    <>
      <ProjectFileLoadDialog
        _handleFileClose={_handleFileClose}
        _handleFileLoad={_handleFileLoad}
        showFileDialog={showFileDialog}
      />
      <Button onClick={_handleFileOpen} className='my-2' variant='success'>
        Load File
      </Button>
    </>
  );
};

export default ProjectFileSystemController;
