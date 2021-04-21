import {React, useState, useEffect} from "react";
import {Link, NavLink, Route, Redirect} from 'react-router-dom';
import "../../index.css";
import NavigationLinks from "./navigation-links";
import userService, {getCurrentUser, loginUser, logoutUser} from "../../services/users-service";
import {connect} from "react-redux";


const NavigationBar = (
    {
        //currentUser,
        getCurrentUser
    }
) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('testing');
    const [currentUser, setCurrentUser] = useState(undefined)

    const updateSearch = e => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(searchTerm);
        setSearchTerm("");
        window.location.href = `/search/${searchTerm}`;
    }

    useEffect( () => {
        const getUser = async () => {
            await userService.getCurrentUser()
                .then((user) => {
                    if (user !== null) {
                        setCurrentUser(user)
                    }
                })
        }
        getUser()
    }, [])

    return (
        <>
            <div className="wbdv-navigation-bar sticky-top">
                <div className="row">
                    <div className="col-1 wbdv-center-in-div">
                        <i className="fas fa-2x fa-pepper-hot"></i>
                    </div>

                    <div className="col-3 d-none d-md-block">
                        <Link to={"/home"}>
                            <h3 className="wbdv-site-title wbdv-center-in-div">
                                RecipeHero
                            </h3>
                        </Link>

                    </div>

                    <div className="col-4 d-none d-md-block">
                        <NavigationLinks/>
                    </div>
                    <form onSubmit={getSearch} className="col-md-4 col-8">
                        <input className="form-control wbdv-center-in-div"
                               value={searchTerm}
                               onChange={updateSearch}
                               placeholder="Search"/>
                    </form>
                    <div className="col-1 ">
                        <div className="dropdown d-block d-sm-block d-md-none">
                            <a className="btn wbdv-navbar-btn dropdown-toggle"
                               href="#" role="button"
                               id="dropdownMenuLink"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false">
                                Menu
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item wbdv-body-text" href="/home">home</a>
                                {
                                    currentUser !== undefined && currentUser.userRole !== "1" &&
                                    <a className="dropdown-item wbdv-body-text" href="/new-recipe">new recipe</a>
                                }
                                {
                                    currentUser !== undefined &&
                                        <>
                                            <a className="dropdown-item wbdv-body-text" href={`/profile/${currentUser.userID}`}>profile</a>
                                            <a className="dropdown-item wbdv-body-text" href="/home" onClick={() => userService.logoutUser()}>logout</a>
                                        </>
                                }
                                {
                                    currentUser === undefined &&
                                    <a className="dropdown-item wbdv-body-text" href="/login">sign in</a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser
})

const dtpm = (dispatch) => ({
    getCurrentUser: () =>
        userService.getCurrentUser()
            .then(user => dispatch({
                type: "CURRENT_USER",
                user: user
            }))
})


export default connect(
    stpm,
    dtpm)
(NavigationBar)