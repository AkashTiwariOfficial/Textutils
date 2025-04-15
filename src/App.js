
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
   
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been activated", "success");
    } 
    else{
      setMode('light')
      document.body.style.backgroundColor = 'White';
      showAlert("Light Mode has been activated", "success");
      // setTimeout(() => {
      //   document.title = 'Install Textutils for better experience';
      // }, 1000);
      // setTimeout(() => {
      //   document.title = ' This is Akash Tiwari s website better experience';
      // }, 2000);
    }
  }

  const showAlert = (message , Type) => {
          setAlert({
            msg: message,
            Type: Type
          });
          setTimeout(() => {
            setAlert(null)
          }, 1200);
  }

  const changeMode = () => {
    document.body.style.backgroundColor = '#0dcaf0';
      showAlert("Sky Mode has been activated", "success");
      document.querySelectorAll(".btn.btn-primary.mx-1").forEach((btn) => {
        btn.style.backgroundColor = '#198754';
        btn.style.border = '#198754 solid';
  });
}

  const changeMode2 = () => {
    document.body.style.backgroundColor = 'rgb(76, 175, 80)';
      showAlert("Green Mode has been activated", "success");
      document.querySelectorAll(".btn.btn-primary.mx-1").forEach((btn) => {
        btn.style.backgroundColor = '#0D47A1';
        btn.style.border = '#0D47A1 solid';
  });
  }

  const changeMode1 = () => {
    document.body.style.backgroundColor = '#fd7e14';
      showAlert("Orange Mode has been activated", "success");
      document.querySelectorAll(".btn.btn-primary.mx-1").forEach((btn) => {
        btn.style.backgroundColor = '#E91E63';
        btn.style.border = '#E91E63 solid';
  });
  }
  
  const changeMode3 = () => {
    document.body.style.backgroundColor = '#6f42c1';
      showAlert("Purple Mode has been activated", "success");
      document.querySelectorAll(".btn.btn-primary.mx-1").forEach((btn) => {
        btn.style.backgroundColor = '#f59e0b';
        btn.style.border = '#f59e0b solid';
  });
  }


  return (
    <>
    <Navbar title="Textutils" aboutext="About" mode={mode} toggleMode={toggleMode}  changeMode={changeMode} changeMode1={changeMode1} changeMode2={changeMode2} changeMode3={changeMode3} /> 
    <Alert alert={alert} />
    <div className="container">
    <TextForm heading="Enter the Text to Anaylse it"  mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
    </div>
    
    {/* <Router>
    <Navbar title="Textutils" aboutext="About" mode={mode} toggleMode={toggleMode}  changeMode={changeMode} changeMode1={changeMode1} changeMode2={changeMode2} changeMode3={changeMode3} /> 
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={
      <TextForm heading="Enter the Text to Anaylse it"  mode={mode} showAlert={showAlert} toggleMode={toggleMode} />} />
    </Routes>
    </div>
    </Router> */}

  </>
  );
}

export default App;


