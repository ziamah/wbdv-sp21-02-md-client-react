import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";

const RecipeList = ({recipes = [], heading = "My Posted Recipes"}) => {

    return (
        <div className="background-followers">
        <h1 className="fill-background"> {heading} </h1>

        <ul>
        {
            recipes.map(recipe => <li>{recipe}</li>)
        }
        </ul>
        </div>


    )

}

export default RecipeList;