import React, {Component} from 'react';
import './Bootstrap.min.css';
import './App.css';
//import './fontawesome.min.css'
import MainComponent from './components/controller/MainComponent';
import {BrowserRouter} from 'react-router-dom'
// import Admin from './components/controller/Admin';

const App = () => {
  return (
    <BrowserRouter>
       <div id="page-container">
        <MainComponent />
        {/* <Admin/> */}
       </div>
    </BrowserRouter>
  );
};

export default App;