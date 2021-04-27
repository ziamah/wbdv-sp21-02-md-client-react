import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";
import {Button, Collapse} from 'react-bootstrap';

const RecipeList = ({recipes = [], heading = "My Fav Recipes", favId=[]}) => {
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

            <Collapse in={openCollapse}>

                <ul>
                    {
                        //recipes.map((recipe, index) => <li>{recipe}</li>)
                        favId.map(id =>

                            <li>
                                {/*<Link to={`/profile/user/${id[0]}`}>{id[0]}</Link>*/}
                                {/*<Link to={`${id[1]}`}>{id[2]}</Link>*/}
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

export default RecipeList;