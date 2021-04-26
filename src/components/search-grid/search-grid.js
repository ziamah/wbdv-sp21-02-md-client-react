import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import SearchCard from "./search-card";
import RAPID_API_KEY_const from "../../api";
//TODO: import recipe service after it's made

const SearchGrid = () => {
    const RAPID_API_KEY = RAPID_API_KEY_const

    const [recipes, setRecipes] = useState([]);

    const [userRecipes, setUserRecipes] = useState([]);

    const {term} = useParams()
    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${term}`,
                { "method": "GET", "headers": { "x-rapidapi-key": `${RAPID_API_KEY}`,
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com" } });
            const data = await response.json();
            setRecipes(data.results);
        };
        const timer = setTimeout(async () => {
            await getRecipes()
        }, 100);
        return () => clearTimeout(timer)
    }, [RAPID_API_KEY, term]);


    useEffect(() => {
        const getRecipes2 = async () => {
            const response = await fetch(
                `https://recipehero2021-backend3.herokuapp.com/api/userrecipes`);
                // 'http://localhost:8080/api/userrecipes');
            const data = await response.json();

            var results = data.filter(data => {
                return data.recipeName.toLowerCase().indexOf(term.toLowerCase()) > -1;
                // return data.recipeName.includes(term);
            });

            // var results = [];
            // for (var i= 0 ; i < data.length; i++)
            // {
            //     if (data[i].recipeName.includes(term) > -1 ) {
            //         results.push(data[i]);
            //     }
            //     console.log(data[i].recipeName);
            //
            // }

            setUserRecipes(results);

            console.log(data);
            console.log(data.length);
            console.log(results);
            console.log(term);
        };
        const timer = setTimeout(async () => {
            await getRecipes2()
        }, 100);
        return () => clearTimeout(timer)
    }, [term]);


    return(
        <div>
            <h2 className="h2">Search Results:</h2>
            <br/>
            <div>
                {userRecipes && userRecipes.map((userRecipe) =>
                    <SearchCard
                        key={userRecipe.recipeID}
                        id={userRecipe.recipeID}
                        title={userRecipe.recipeName}
                        image={userRecipe.picURL}
                    />
                )}

                {/*<h2 className="h2">Other Search Results:</h2>*/}

                {recipes && recipes.map((recipe) =>
                    <SearchCard
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                    />
                )}
            </div>

        </div>
    )
}

export default SearchGrid