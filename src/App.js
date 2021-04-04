
import './App.css';
<<<<<<< HEAD
import {BrowserRouter} from "react-router-dom";
import BaseApp from "./components/base-app";

function App() {
  return (
      <BrowserRouter>
        <BaseApp/>
      </BrowserRouter>
=======
import {BrowserRouter, Route} from "react-router-dom";
import Profile from './components/profile/profile'

function App() {
  return (

    <BrowserRouter>
        <Route path={"/profile/user/:userId"} exact={true} render={() => <Profile/>}>
    {/*<div className="">*/}

            {/*<Profile/>*/}

    {/*</div>*/}
        </Route>
    </BrowserRouter>

>>>>>>> 8a848e2903ce8c9a907fc894a3f16a13c1f5d30f
  );
}

export default App;
