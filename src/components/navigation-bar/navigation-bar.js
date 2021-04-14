import {React, useState, useEffect} from "react";
import {Link, NavLink, Route, Redirect} from 'react-router-dom';
import "../../index.css";
import NavigationLinks from "./navigation-links";
import {getCurrentUser, loginUser, logoutUser} from "../../services/users-service";


const NavigationBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('testing');

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
                                <a className="dropdown-item wbdv-body-text" href="/profile">profile</a>
                                <a className="dropdown-item wbdv-body-text" href="/new-recipe">new recipe</a>
                                <a className="dropdown-item wbdv-body-text" href="/login">sign in</a>
                                <a className="dropdown-item wbdv-body-text" onClick={() => logoutUser()}>logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavigationBar;