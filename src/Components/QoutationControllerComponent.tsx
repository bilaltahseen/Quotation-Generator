import React, { useState } from 'react';
import ProjectTitleComponent from './ProjectTitleComponent';
import ProjectFeaturesComponent from './FeaturesComponent/ProjectFeaturesControllerComponent';
import ProjectPriceComponent from './ProjectPriceComponent';
import ProjectQotationComponent from './ProjectQotationComponent/ProjectQotationControllerComponent';

interface Props {}
interface Feature {
  id: number;
  title: string;
  description: string;
}

const QoutationControllerComponent = (props: Props) => {
  const [dialogState, setDialogState] = useState(false);
  const [featureName, setFeatureName] = useState('');
  const [featuresList, setFeaturesList] = useState<Feature[]>([
    {
      id: 1,
      title: 'Frontend',
      description: 'Hello 1',
    },
  ]);
  const [description, setDescription] = useState('');
  const [editDialogState, setEditDialogState] = useState(false);

  const [editId, setEditId] = useState(0);
  const [editFeatureName, setEditFeatureName] = useState('');
  const [editFeatureDescription, setEditFeatureDescription] = useState('');

  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const [projectPrice, setProjectPrice] = useState('');

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

  return (
    <div>
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
      />
    </div>
  );
};

export default QoutationControllerComponent;
