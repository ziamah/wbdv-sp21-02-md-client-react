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
              <h2 className="h3 section-container wbdv-section-header">
                  {heading}
                  {
                      openCollapse &&
                      <i className="fas fa-caret-down float-right"></i>
                  }
                  {
                      !openCollapse &&
                      <i className="fas fa-caret-up float-right"></i>
                  }
              </h2>
        </div>

            <Collapse  in={openCollapse}>


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