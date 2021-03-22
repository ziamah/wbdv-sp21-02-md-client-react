import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";

const RecipeList = ({recipes = [], heading = "My Posted Recipes"}) => {

    return (
        <>
        <h1 className="profile-items-border"> {heading} </h1>

        <ul>
        {
            recipes.map(recipe => <li>{recipe}</li>)
        }
        </ul>
        </>


    )

}

export default RecipeList;