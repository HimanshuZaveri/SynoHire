import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Help from './Components/Help/Help';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
 <Help /></BrowserRouter>,
  document.getElementById('root')
);