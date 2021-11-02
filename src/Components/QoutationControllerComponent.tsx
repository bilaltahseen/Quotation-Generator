import React, { useState } from 'react';
import ProjectTitleComponent from './ProjectTitleComponent';
import ProjectFeaturesComponent from './FeaturesComponent/ProjectFeaturesControllerComponent';
import ProjectPriceComponent from './ProjectPriceComponent';
import ProjectQotationComponent from './ProjectQotationComponent/ProjectQotationControllerComponent';
import ProjectFileSystemController from './FileSystemComponent/ProjectFileSystemController';

interface Props {}
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
const QoutationControllerComponent = (props: Props) => {
  const [dialogState, setDialogState] = useState(false);
  const [featureName, setFeatureName] = useState('');
  const [featuresList, setFeaturesList] = useState<Feature[]>([]);
  const [description, setDescription] = useState('');
  const [editDialogState, setEditDialogState] = useState(false);

  const [editId, setEditId] = useState(0);
  const [editFeatureName, setEditFeatureName] = useState('');
  const [editFeatureDescription, setEditFeatureDescription] = useState('');

  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const [projectPrice, setProjectPrice] = useState('');

  const [showFileDialog, setShowFileDialog] = useState(false);

  const _handleClose = () => {
    setDialogState(false);
    setDescription('');
  };
  const _handleOpen = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDialogState(true);
  };

  const _descriptionHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.currentTarget.value);
  };

  const _resetForm = () => {
    setDialogState(false);
    setDescription('');
    setFeatureName('');
  };

  const _resetFormEdit = () => {
    setEditId(0);
    setEditDialogState(false);
    setEditFeatureDescription('');
    setEditFeatureName('');
  };

  const _addFeatureHandler = () => {
    if (featuresList.length > 0) {
      const lastIndex = featuresList[featuresList.length - 1].id;
      const feature = {
        id: lastIndex + 1,
        title: featureName,
        description: description,
      };
      featuresList.push(feature);
    } else {
      const feature = {
        id: 1,
        title: featureName,
        description: description,
      };
      featuresList.push(feature);
    }
    _resetForm();
  };

  const _handlCloseEdit = () => {
    setEditDialogState(false);
  };
  const _handleOpenEdit = ({ id, title, description }: Feature) => {
    setEditId(id);
    setEditFeatureName(title);
    setEditFeatureDescription(description);
    setEditDialogState(true);
  };

  const _featureHandlerEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditFeatureName(event.currentTarget.value);
  };

  const _descriptionHandlerEdit = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditFeatureDescription(event.currentTarget.value);
  };

  const _editFeatureHandler = () => {
    const indexofId = featuresList.findIndex((elem) => elem.id === editId);
    const tempFeatureList = [...featuresList];
    tempFeatureList[indexofId] = {
      id: editId,
      title: editFeatureName,
      description: editFeatureDescription,
    };
    setFeaturesList(tempFeatureList);
    _resetFormEdit();
  };

  const _deleteHandler = (id: number) => {
    const indexofId = featuresList.findIndex((elem) => elem.id === id);
    if (indexofId > -1) {
      const tempFeatureList = [...featuresList];
      tempFeatureList.splice(indexofId, 1);
      setFeaturesList(tempFeatureList);
    }
  };

  const _handleFileClose = () => {
    setShowFileDialog(false);
  };

  const _handleFileLoad = (project: ProjectFileType) => {
    setProjectName(project.projectName);
    setProjectDescription(project.projectDescription);
    setClientName(project.projectClient);
    setFeaturesList(project.projectFeatures);
    setProjectPrice(project.projectPricing);
    setShowFileDialog(false);
  };

  const _handleFileOpen = () => {
    setShowFileDialog(true);
  };

  const _handFileSave = () => {
    const data = {
      projectName: projectName,
      projectClient: clientName,
      projectDescription: projectDescription,
      projectFeatures: featuresList,
      projectPricing: projectPrice,
      projectCreationDate: new Date().toString(),
    };

    const blob = new Blob([JSON.stringify(data)], { type: 'text/json' });
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = `${projectName}_QoutationFile.json`;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  };

  return (
    <div>
      <ProjectFileSystemController
        _handleFileClose={_handleFileClose}
        _handleFileLoad={_handleFileLoad}
        _handleFileOpen={_handleFileOpen}
        showFileDialog={showFileDialog}
      />

      <ProjectTitleComponent
        clientName={clientName}
        projectName={projectName}
        projectDescription={projectDescription}
        setClientName={setClientName}
        setProjectName={setProjectName}
        setProjectDescrption={setProjectDescription}
      />
      <br />
      <ProjectFeaturesComponent
        _deleteHandler={_deleteHandler}
        _handleOpen={_handleOpen}
        _handleOpenEdit={_handleOpenEdit}
        setFeatureName={setFeatureName}
        featureName={featureName}
        featuresList={featuresList}
        _addFeatureHandler={_addFeatureHandler}
        _descriptionHandler={_descriptionHandler}
        _handleClose={_handleClose}
        description={description}
        dialogState={dialogState}
        _descriptionHandlerEdit={_descriptionHandlerEdit}
        _editFeatureHandler={_editFeatureHandler}
        _featureHandlerEdit={_featureHandlerEdit}
        _handlCloseEdit={_handlCloseEdit}
        editDialogState={editDialogState}
        editFeatureDescription={editFeatureDescription}
        editFeatureName={editFeatureName}
      />
      <br />
      <ProjectPriceComponent
        projectPrice={projectPrice}
        setProjectPrice={setProjectPrice}
      />
      <br />
      <ProjectQotationComponent
        projectClientName={clientName}
        projectDescription={projectDescription}
        projectName={projectName}
        projectPrice={projectPrice}
        projectQotationList={featuresList}
        _handFileSave={_handFileSave}
      />
    </div>
  );
};

export default QoutationControllerComponent;
