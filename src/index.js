import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Forecast from "./components/forecast";
import Header from "./Header/Header";
import createGlobalStyle from "./global"
import Global from "./global";
import {LogoText} from "./UI/HeaderLogo";
import {ThemeProvider} from "styled-components";
const light_theme = {
    colors:{

    },
    media:{
        phone: "(max-width: 480px)",
        tablet_640: "(max-width: 640px) and (min-width: 480px)",
        tablet_768: "(max-width: 768px) and (min-width: 640px)",
        desktop_1024: "(max-width: 1024px) and (min-width: 768px)",
        desktop_1080: "(max-width: 1080px) and (min-width: 1024px)"
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme = {light_theme}>
      <Global/>
      <App/>
      </ThemeProvider>

  </React.StrictMode>
);
