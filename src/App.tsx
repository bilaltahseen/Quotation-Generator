import Layout from './Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import QoutationControllerComponent from './Components/QoutationControllerComponent';

function App() {
  return (
    <Layout>
      <div className='bg-white rounded-3 shadow-sm p-3'>
        <h1>Quotation Generator</h1>
      </div>
      <br />

      <QoutationControllerComponent />
    </Layout>
  );
}

export default App;
