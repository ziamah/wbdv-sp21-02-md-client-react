import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import BaseApp from "./components/base-app";

function App() {
  return (
      <BrowserRouter>
        <BaseApp/>
      </BrowserRouter>
  );
}

export default App;
