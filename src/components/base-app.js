import React from 'react';
import {Route, Link} from "react-router-dom";
import NavigationBar from "./navigation-bar/navigation-bar";
import HomePage from "./home-page/home-page";
import DetailsPage from "./details-page/details-page";
import NewRecipe from "./new-recipe-page/new-recipe-page";

class BaseApp extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavigationBar></NavigationBar>
                <div className="wbdv-page-content">
                    <Route path="/home">
                        <HomePage/>
                    </Route>
                    <Route path="/profile"></Route>
                    <Route path="/new-recipe">
                        <NewRecipe/>
                    </Route>
                    {/*<Route path="/results"></Route>*/}
                    <Route path="/details">
                        {/*TODO: Implement details url dependent on recipe id*/}
                        <DetailsPage/>
                    </Route>
                    <Route path="/login"></Route>
                    <Route path="/register"></Route>
                </div>
            </div>
        )
    }
}

export default BaseApp