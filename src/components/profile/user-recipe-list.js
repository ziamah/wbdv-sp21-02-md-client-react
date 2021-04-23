import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Collapse} from 'react-bootstrap';

const UserRecipeList = ({
                            heading = "My Posted Recipes",
                            myRecipes = []
                        }) => {

    const [openCollapse, setOpenCollapse] = useState(false);

    return (
        <div className="background-followers">
            <div className="" onClick={() => setOpenCollapse(!openCollapse)}>
                <h1 className="fill-background"> {heading} </h1>
            </div>
            <Collapse in={openCollapse}>

                <ul>
                    {
                        myRecipes.map(recipe => <li><Link to={`/details/${recipe.recipeID}`}>
                            {recipe.recipeName}</Link></li>)
                    }
                </ul>
            </Collapse>
        </div>
    )
}

export default UserRecipeList;