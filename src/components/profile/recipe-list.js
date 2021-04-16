import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";
import {Button, Collapse} from 'react-bootstrap';

const RecipeList = ({recipes = [], heading = "My Fav Recipes", favId=[]}) => {
const [openCollapse, setOpenCollapse] = useState(false);


    return (
        <div className="background-followers">

        <div className="" onClick={() => setOpenCollapse(!openCollapse)}>
              <h1 className="fill-background"> {heading} </h1>
        </div>

            <Collapse in={openCollapse}>

                <ul>
                    {
                        //recipes.map((recipe, index) => <li>{recipe}</li>)
                        favId.map(id =>

                        <li>
                             {/*<Link to={`/profile/user/${id[0]}`}>{id[0]}</Link>*/}
                             <Link to={`${id[1]}`}>{id[0]}</Link>
                        </li>

                        )
                    }
                </ul>
            </Collapse>
        </div>


    )

}

export default RecipeList;