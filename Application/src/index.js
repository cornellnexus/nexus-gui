import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Mission from './Components/mission'
import Overview from './Components/overview'
import Shell from './Components/shell'
import Sensors from './Components/sensors'
import Scripts from './Components/scripts'
import Settings from './Components/settings'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/mission' element={<Mission />} />
      <Route path='/overview' element={<Overview />} />
      <Route path='/shell' element={<Shell />} />
      <Route path='/sensors' element={<Sensors />} />
      <Route path='/scripts' element={<Scripts />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
