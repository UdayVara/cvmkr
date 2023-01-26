import './App.css';
import Input from './components/Input';
import NotSupport from './components/NotSupport';
import Output from './components/Output';
import CvState from './context/CvState';

function App() {
  return (
    <>
    <CvState>
      <div className="container-fluid d-md-block d-none">
        <div className="row">
          <Input />
          <Output />
        </div>
      </div>
      

      <NotSupport />
    </CvState>
    </>
  );
}

export default App;
