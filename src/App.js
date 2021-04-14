
import './App.css';
import {BrowserRouter} from "react-router-dom";
import BaseApp from "./components/base-app";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <BaseApp/>
      </BrowserRouter>

  );
}

export default App;
