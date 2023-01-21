import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


let name ="Mannu"
function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Darkmode has been enabled","success");
      document.title = 'TextUtils - DarkMode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode'
      },2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now'
      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Lightmode has been enabled","success");
      document.title='TextUtils - LightMode';
    }
  }
  return (
    <>
    {/* <Navbar title="Textutils" AboutText="About"/> */}
    {/* <Router> */}
    <Navbar title="Textutils" mode ={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
    <div className="container my-3"> 
    {/* <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          <Route  exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode ={mode}/> 
          {/* </Route>
    </Switch> */}
    </div> 
    {/* </Router> */}
    </>
  );
}

export default App;
