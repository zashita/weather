import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Forecast from "./components/forecast";
import Header from "./Header/Header";
import createGlobalStyle from "./global"

import {LogoText} from "./UI/HeaderLogo";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
