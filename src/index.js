import React, {useState} from 'react';
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
        mainText: `#202020`,
        additionalText: `#A8B0C2`,
        dividers: `#DCDFE7`,
        pageBackground: `#F6F6F6`,
        cardBackground: `#FFFFFF`

    },
    media:{
        phone: "(max-width: 480px)",
        tablet_640: "(max-width: 640px) and (min-width: 480px)",
        tablet_768: "(max-width: 768px) and (min-width: 640px)",
        desktop_1024: "(max-width: 1024px) and (min-width: 768px)",
        desktop_1080: "(max-width: 1080px) and (min-width: 1024px)"
    }
}
const dark_theme = {
    colors:{
        mainText: `#dedbdb`,
        additionalText: `#7f889f`,
        dividers: `#ffffff`,
        pageBackground: `#484040`,
        cardBackground: `#4f3131`

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
      <ThemeProvider theme = {dark_theme}>
      <Global/>
      <App/>
      </ThemeProvider>

  </React.StrictMode>
);
