import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import BaseApp from "./components/base-app";
import React from "react";


const App = () => {

  return (
      <BrowserRouter>
        <BaseApp/>
      </BrowserRouter>
  );
}

export default App;
