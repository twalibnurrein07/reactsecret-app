import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";




ReactDOM.render(
  <Router>
  <Navigation/>
  
    <Main/>
    </Router>
   ,
  document.getElementById('root')
)
