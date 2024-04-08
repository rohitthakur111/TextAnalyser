import './App.css';
import Navbar from './components/Navbar.js';
import Form , {MyButton, ToLowerTextForm} from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alerts';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import React from 'react'
function App() {
  // const [mode, setMode] = useState('light');
  
  //set theme of website 
  const themeColor = {
    color : 'rgba(8, 33, 59, 0.95)',
    background : 'white',
    mode : 'light'
  }
  const [color, setcolor] = useState(themeColor);
  let get_color =(event) =>{
    let background = event.target.getAttribute('background'); 
    if(color.background !== background){
      setcolor ({
        mode : event.target.getAttribute('mode'),
        color : event.target.getAttribute('color'),
        background : event.target.getAttribute('background')
      });
      
      document.body.style.backgroundColor = background;
      document.body.style.color = event.target.getAttribute('color');
      showAlert('success' , 'Your Theme is Updated');
    }
  }
  //end set theme functinality

  /*
  const [modetext, setModetext] = useState('Enable dark mode');
  const toggleMode = (color,back) =>{
    if(mode === 'light'){
      setMode('dark');
      setModetext('Disable dark mode');
      document.body.style.backgroundColor='rgb(8 33 59 / 95%)';
      document.body.style.color='white';
      
    }
    else{
      setMode('light');
      setModetext('Enable dark mode');
      document.body.style.backgroundColor='white';
      document.body.style.color='#212529';
    }
    showAlert('success' , `Successfully ${modetext}`);
  }
  */

  //alert components
  const [alert, setAlert] =useState(null);
  const showAlert=(type, message)=>{
    setAlert(
      {
        msg : message,
        type : type
      }
    );
    setTimeout(function(){
      setAlert(null);
    },1500);
  }
  return (

    <>  
    <Router>
      {/* <Navbar title='Text Analyzer' setTheme ={color} color={get_color} mode ={mode} toggleMode = {toggleMode} modetext={modetext}/> */}
      <Navbar title='Text Analyzer' menu3 = "Text" setTheme ={color} color={get_color}/>
      <Alert alert ={alert} />
      <div className="container-fluid"> 
        {/* <Form textheading ="Add Your Text" setTheme ={color} alert ={showAlert}/> */}
         <Routes>
          <Route exact path="/" element={<Form textheading ="Add Your Text" setTheme ={color} alert ={showAlert}/>}>
          </Route>
          <Route exact path="/about" element={<About  setTheme ={color} />}>
          </Route>
          <Route exact path="/text" element={<ToLowerTextForm  setTheme ={color}/>}>
          </Route>
        </Routes> 
      </div>

      
      {/* <ToLowerTextForm heading ="Convert To Lower case" mode ={mode}/> */}
      {/* <About/> */}
      <div className="container my-4">
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </div>
      


       </Router>
    </>
     
  );
}


export default App;
  