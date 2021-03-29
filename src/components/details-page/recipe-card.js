import DietTag from "./diet-tag";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {render} from "@testing-library/react";
import API_KEY_const from "../../api";

const RecipeCard = () => {
    const{id} = useParams()

    const API_KEY = API_KEY_const

    useEffect(() => {
        getDetails();
    }, []);

    const [recipeDetails, setRecipeDetails] = useState({});

    const getDetails = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const data = await response.json();
        setRecipeDetails(data);
        console.log(data);
    };


    return (
        <div className="col-12 wbdv-widget-container wbdv-widget-interior">
            <div className="col-12">
                <h1 className="h1 wbdv-center-in-div"> {recipeDetails.title} </h1>
                <a className="wbdv-link-text wbdv-center-in-div" href={recipeDetails.sourceUrl}>From Spoonacular</a>
            </div>
            <hr/>
            <div className="row wbdv-widget-interior">
                <div className="col-12 col-sm-6">
                    {/*TODO: Fill image programmatically*/}
                    <img className="d-block w-100 wbdv-padded-img"
                         src={recipeDetails.image}
                         alt="birria-img.jpg"></img>
                </div>
                <div className="col-12 col-sm-6">
                    {/*Basic Info Section*/}
                    <p className="row wbdv-body-text" dangerouslySetInnerHTML={{__html : recipeDetails.summary}}>
                    </p>
                    {/*TODO: Fill recipe details programmatically*/}
                    <p className="row">
                        <div className="wbdv-body-text">
                            {/*TODO: Make toggleable so that user can favorite/unfavorite*/}
                            <i className="fas fa-heart wbdv-padded-icon"></i>
                            16
                        </div>
                        <div className="wbdv-padded-icon wbdv-body-text wbdv-verticalLine">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                    </p>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Servings: {recipeDetails.servings}
                        </div>
                    </div>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Cook Time: {recipeDetails.readyInMinutes} minutes
                        </div>
                    </div>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Cuisine: {recipeDetails.cuisines}
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Tags:
                        </div>
                    </div>
                    <div className="row">
                        {/*TODO: map dietTags to diet attribute*/}
                        <h2>
                            <DietTag tagType={"vegan"}/>
                        </h2>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Contains:
                        </div>
                    </div>
                    <div className="row">
                        {/*TODO: map dietTags to ingredient attribute*/}
                        <h2>
                            <DietTag tagType={"treenut"}/>
                        </h2>
                    </div>
                    <br/>
                </div>
            </div>
            <hr/>
            <div className="row wbdv-widget-interior">
                <div className="col-12 col-md-6">
                    {/*Ingredients Section*/}
                    <h3 className="h3">Ingredients:</h3>
                    <ul>
                        {/*TODO: Map ingredients to list items*/}
                        {recipeDetails.extendedIngredients && recipeDetails.extendedIngredients.map(
                            (ingredient) => {
                                return(
                                    <li>{ingredient.original}</li>
                                )
                            })}


                    </ul>
                </div>
                <div className="col-12 col-md-6 wbdv-body-text">
                    {/*Instructions Section*/}
                    <h3 className="h3">Instructions:</h3>
                    <p dangerouslySetInnerHTML={{__html : recipeDetails.instructions}}/>

                </div>
            </div>
        </div>
    )
}

export default RecipeCard