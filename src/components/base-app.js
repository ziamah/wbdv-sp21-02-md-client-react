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
                    <NavigationBar></NavigationBar>
                    <div className="wbdv-page-content">
                        <Route exact path={["/", "/home"]}>
                        <HomePage/>
                    </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
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
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route exact path={["/search", "/search/:term"]}>
                            <SearchGrid/>
                        </Route>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default BaseApp

