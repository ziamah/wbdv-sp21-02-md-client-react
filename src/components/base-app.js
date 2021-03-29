import React from 'react';
import {Route, Link} from "react-router-dom";
import NavigationBar from "./navigation-bar/navigation-bar";
import HomePage from "./home-page/home-page";
import DetailsPage from "./details-page/details-page";
import NewRecipe from "./new-recipe-page/new-recipe-page";
import Login from "./login/login";
import SearchGrid from "./search-grid/search-grid";

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
                    <Route exact path={["/details", "/details/:id"]}>
                        {/*TODO: Implement details url dependent on recipe id*/}
                        <DetailsPage/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register"></Route>
                    <Route path="/search">
                        <SearchGrid/>
                    </Route>
                </div>
            </div>
        )
    }
}

export default BaseApp

