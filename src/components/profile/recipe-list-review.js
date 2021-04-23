import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Collapse} from 'react-bootstrap';

const RecipeListReview = ({
                              heading = "My Fav Recipes",
                              favId = []
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
                        favId.map(id =>
                            <li>
                                <Link to={`/details/${id.recipeId}`}>
                                    {id.recipeName}</Link>
                            </li>
                        )
                    }
                </ul>
            </Collapse>
        </div>
    )
}

export default RecipeListReview;