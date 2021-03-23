import React from "react";
import {Link, NavLink} from 'react-router-dom';
import "../../index.css";
import NavigationLinks from "./navigation-links";

export default class NavigationBar
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wbdv-navigation-bar">
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
                        <NavigationLinks props={this.props}></NavigationLinks>
                    </div>
                    <div className="col-md-4 col-8">
                        <input className="form-control wbdv-center-in-div"
                               placeholder="Search"/>
                    </div>
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
                                <a className="dropdown-item wbdv-body-text" href="#">profile</a>
                                <a className="dropdown-item wbdv-body-text" href="/new-recipe">new recipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

