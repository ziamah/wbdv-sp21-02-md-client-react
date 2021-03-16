import React, {useEffect, useState} from "react";
import "../../index.css";
import RecipeDetails from "../details-page/details-page";
import {BrowserRouter} from "react-router-dom";



const NavigationBar = () => {

    //api only fetches a few times a minute.
    const APP_ID = "a2c83fe8";
    const APP_KEY = "cf13e8bd900faf4d9e6e10cfc9de34e7";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {

        //so to get around a CORS problem, i added a proxy to package.json
        //"proxy": "https://api.edamam.com"
        //which is why fetch doesn't have the edamam api url.
        const response = await fetch(`/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
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
    }

        return (
            <>
                <div className="wbdv-navigation-bar sticky-top">
                    <form onSubmit={getSearch} className="row">
                        <div className="col-1 wbdv-center-in-div">
                            <i className="fas fa-bars"></i>
                        </div>
                        <h3 className="col-3 d-none d-md-block">
                            App Name
                        </h3>
                        <div className="col-7">
                            <input className="form-control wbdv-center-in-div p"
                                   value={search}
                                   onChange={updateSearch}
                                   placeholder="Search"/>
                        </div>
                    </form>
                </div>
                <body>
                {recipes.map(recipe => (
                    <RecipeDetails
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        cuisineType={recipe.recipe.cuisineType}
                        dietLabels={recipe.recipe.dietLabels}
                        url={recipe.recipe.url}

                    />))}
                </body>
            </>
        )

}

export default NavigationBar;