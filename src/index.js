import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Forecast from "./components/forecast";
import Header from "./Header/Header";
import createGlobalStyle from "./global"
import Global from "./global";
import {LogoText} from "./UI/HeaderLogo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Global/>
      <App/>


  </React.StrictMode>
);
