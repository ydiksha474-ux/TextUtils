import './Appa.css';
import Navbar from'./components/Navbar';
import TextForm from'./components/TextForm';
import About from './components/About';
import React ,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";




function App() {
  const [mode,setMode]= useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message, type)=>{
          setalert({
            msg:message,
            type:type
          })
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been Enabled", "Success");
      document.title='TextUtiles-DarkMode';
      // setInterval(() =>{
      //   document.title='TextUtils is Amzing Mode';
      // },2000);
      // setInterval(() =>{
      //   document.title='Install TextUtils now';
      // },2000);
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","Success");
      document.title='TextUtiles-LightMode';


    }
  }
  
  return (
    <>
    {/* <Router> */}
    {/* <Navbar title ="TextUtils" aboutText="About TextUtils" />  */}

    <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    <div className ="container my-3">
      {/* <Routes>   
          <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" */}<TextForm
  heading="Enter the text to analyze below"
  mode={mode}
  showAlert={showAlert}
/>
        {/* </Routes> */}
        </div>
        {/* </Router> */}
        </>
  );
}

export default App;
