import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';

function App() {


  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
      document.body.style.backgroundColor = 'white';
  return (
    <>
      <Navbar title="TextUtils" about="About Us"/>
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForms showAlert={showAlert} heading="Enter the text to analyse below"  />
      </div>
    </>
  );
}

export default App;
