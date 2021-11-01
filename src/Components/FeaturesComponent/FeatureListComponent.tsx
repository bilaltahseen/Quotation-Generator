import { Table, Button, Row, Col } from 'react-bootstrap';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Props {
  featuresList: Feature[];
  _handleOpenEdit({ id, title, description }: Feature): void;
  _deleteHandler(id: number): void;
}

const FeatureListComponent = ({
  featuresList,
  _handleOpenEdit,
  _deleteHandler,
}: Props) => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr className='d-flex'>
          <th className='col-1'>#</th>
          <th className='col-3'>Feature Name</th>
          <th className='col-6'>Feature Description</th>
          <th className='col-2'>Option</th>
        </tr>
      </thead>
      <tbody>
        {featuresList?.map((elem, index) => {
          return (
            <tr className='d-flex'>
              <td className='col-1'>{elem.id}</td>
              <td className='col-3'>{elem.title}</td>
              <td className='col-6'>{elem.description}</td>
              <th className='col-2 justify-content-around d-flex'>
                <Row>
                  <Col className='my-1'>
                    <Button
                      onClick={() => _deleteHandler(elem.id)}
                      variant='danger'
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                  <Col className='my-1'>
                    <Button
                      onClick={() => _handleOpenEdit(elem)}
                      variant='success'
                    >
                      <i className='fas fa-edit'></i>
                    </Button>
                  </Col>
                </Row>
              </th>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default FeatureListComponent;
