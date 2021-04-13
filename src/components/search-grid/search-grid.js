import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import SearchCard from "./search-card";
import RAPID_API_KEY_const from "../../api";
//TODO: import recipe service after it's made

const SearchGrid = () => {
    const RAPID_API_KEY = RAPID_API_KEY_const

    const [recipes, setRecipes] = useState([]);

    const {term} = useParams()
    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${term}`,
                { "method": "GET", "headers": { "x-rapidapi-key": `${RAPID_API_KEY}`,
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com" } });
            const data = await response.json();
            setRecipes(data.results);
            console.log(data);
        };
        const timer = setTimeout(async () => {
            await getRecipes()
        }, 100);
        return () => clearTimeout(timer)
    }, [term]);


    return(
        <div>
            <h2 className="h2">Search Results</h2>
            <br/>
                {recipes && recipes.map((recipe) =>
                    <SearchCard
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                    />
                )}
        </div>
    )
}

export default SearchGrid