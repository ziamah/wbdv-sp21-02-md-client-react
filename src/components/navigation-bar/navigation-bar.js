import {React, useState, useEffect} from "react";
import {Link, NavLink, Route} from 'react-router-dom';
import "../../index.css";
import NavigationLinks from "./navigation-links";
import SearchCard from "../search-grid/search-card";
import SearchGrid from "../search-grid/search-grid";
import API_KEY from "../../api";
import API_KEY_const from "../../api";


// !! using functional components makes useState a lot easier !!
const NavigationBar = () => {
// export default class NavigationBar
//     extends React.Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {

    //api only fetches a few times a minute.
    // const API_KEY = "2035160971a84992bf575d5ea1a437e6";
    // const API_KEY = "12c27a2cfa054cdf967fba97c37c9f95";
    // const API_KEY = "f630a3e76c4b4c2d8470fcc6aa7bbf86";
    const API_KEY = API_KEY_const

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('dummydatatoclearpage');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`);
        const data = await response.json();
        setRecipes(data.results);
        console.log(data);
    };


    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
        // window.location.href = search;


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
                            {/*<NavigationLinks props={this.props}></NavigationLinks>*/}
                            <NavigationLinks/>
                        </div>
                        <form onSubmit={getSearch} className="col-md-4 col-8">
                            <input className="form-control wbdv-center-in-div"
                                   value={search}
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
                                    <a className="dropdown-item wbdv-body-text" href="#">profile</a>
                                    <a className="dropdown-item wbdv-body-text" href="/new-recipe">new recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <body className="mt-5">
                {recipes && recipes.map(recipe => (
                    <SearchCard
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                    />))}
                </body>
            </>
        )
    // }
}

export default NavigationBar;