import React from 'react';
import {Route, Link} from "react-router-dom";
import NavigationBar from "./navigation-bar/navigation-bar";
import HomePage from "./home-page/home-page";

class BaseApp extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavigationBar></NavigationBar>
                <Route path="/home" component={HomePage}></Route>
                <Route path="/profile"></Route>
                {/*<Route path="/results"></Route>*/}
                {/*<Route path="details"></Route>*/}
                <Route path="/login"></Route>
                <Route path="/register"></Route>
            </div>
        )
    }
}

export default BaseApp