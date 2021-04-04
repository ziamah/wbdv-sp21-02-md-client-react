
import './App.css';
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

  );
}

export default App;
