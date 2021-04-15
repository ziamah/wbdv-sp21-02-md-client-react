import React from 'react';
import {Route} from "react-router-dom";
import NavigationBar from "./navigation-bar/navigation-bar";
import HomePage from "./home-page/home-page";
import DetailsPage from "./details-page/details-page";
import NewRecipe from "./new-recipe-page/new-recipe-page";
import Login from "./login/login";
import SearchGrid from "./search-grid/search-grid";
import Register from "./login/register";
import Profile from "./profile/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import userReducer from "../reducers/user-reducer";

const reducer = combineReducers({
    userReducer: userReducer,

})

const store = createStore(reducer)

class BaseApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container-fluid">
                    <Route exact path={["/", "/home"]}>
                        <NavigationBar></NavigationBar>
                        <div className="wbdv-page-content">
                            <HomePage/>
                        </div>
                    </Route>
                    <Route path="/profile">
                        <NavigationBar></NavigationBar>
                        <div className="wbdv-page-content">
                            <Profile/>
                        </div>
                    </Route>
                    <Route path="/new-recipe">
                        <NavigationBar></NavigationBar>
                        <div className="wbdv-page-content">
                            <NewRecipe/>
                        </div>
                    </Route>
                    <Route exact path={["/details", "/details/:id"]}>
                        <NavigationBar></NavigationBar>
                        <div className="wbdv-page-content">
                            <DetailsPage/>
                        </div>
                    </Route>
                    <Route path="/login">
                        <NavigationBar></NavigationBar>
                        <div className="wbdv-page-content">
                            <Login/>
                        </div>
                    </Route>
                    <Route path="/register">
                        <NavigationBar></NavigationBar>
                        <div className="wbdv-page-content">
                            <Register/>
                        </div>
                    </Route>
                    <Route exact path={["/search", "/search/:term"]}>
                        <NavigationBar></NavigationBar>
                        <div className="wbdv-page-content">
                            <SearchGrid/>
                        </div>
                    </Route>
                </div>
            </Provider>
        )
    }
}

export default BaseApp

