import DietTag from "./diet-tag";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import RAPID_API_KEY_const from "../../api";

const RecipeCard = () => {
    const{id} = useParams()

    const RAPID_API_KEY = RAPID_API_KEY_const

    useEffect(() => {
        getDetails();
    }, []);

    const [recipeDetails, setRecipeDetails] = useState({});

    const getDetails = async () => {
        const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${RAPID_API_KEY}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        });
        const data = await response.json();
        setRecipeDetails(data);
        console.log(data);
    };

    const removeTags = (str) => {
        if ((str===null) || (str==='') || (str===undefined))
            return false;
        else
            str = str.toString();
        // Regular expression to identify HTML tags in
        // the input string. Replacing the identified
        // HTML tag with a null string.
        // Source: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    function truncate(str, num_sentences) {
        if ((str===null) || (str==='') || (str===undefined))
            return false;
        else {
            str = str.toString();
            return str.split(".").splice(0,num_sentences).join(".").concat(".");
        }
    }


    // const summary = recipeDetails.summary.replace(/['"]+/g, '')
    let summary = removeTags(recipeDetails.summary)
    summary = truncate(summary, 4)

    return (
        <div className="col-12 wbdv-widget-container wbdv-widget-interior">
            <div className="col-12">
                <h1 className="h1 wbdv-center-in-div"> {recipeDetails.title} </h1>
                <a className="wbdv-link-text wbdv-center-in-div" href={recipeDetails.sourceUrl}>From {recipeDetails.sourceName}</a>
            </div>
            <hr/>
            <div className="row wbdv-widget-interior wbdv-center-in-div">
                {/*TODO: This button's visibility should only toggle on for the recipe author and admin users*/}
                <button className="btn wbdv-danger-btn">
                    DELETE RECIPE
                </button>
            </div>
            <div className="row wbdv-widget-interior">
                <div className="col-12 col-sm-6">
                    <img className="d-block w-100 wbdv-padded-img"
                         src={recipeDetails.image}
                         alt="birria-img.jpg"></img>
                </div>
                <div className="col-12 col-sm-6">
                    {/*Basic Info Section*/}
                    <p className="row wbdv-body-text">
                        {summary}
                    </p>
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
                        {
                            recipeDetails.glutenFree === true &&
                            <h2>
                                <DietTag tagType={"gf"}/>
                            </h2>
                        }
                        {
                            recipeDetails.ketogenic === true &&
                            <h2>
                                <DietTag tagType={"keto"}/>
                            </h2>
                        }
                        {
                            recipeDetails.diets && recipeDetails.diets.includes("pescatarian") &&
                            <h2>
                                <DietTag tagType={"pescatarian"}/>
                            </h2>
                        }
                        {
                            recipeDetails.diets && recipeDetails.diets.includes("paleolithic") &&
                            <h2>
                                <DietTag tagType={"paleo"}/>
                            </h2>
                        }
                        {
                            recipeDetails.diets && recipeDetails.diets.includes("primal") &&
                            <h2>
                                <DietTag tagType={"primal"}/>
                            </h2>
                        }
                        {
                            recipeDetails.vegetarian === true &&
                            <h2>
                                <DietTag tagType={"vegetarian"}/>
                            </h2>
                        }
                        {
                            recipeDetails.vegan === true &&
                            <h2>
                                <DietTag tagType={"vegan"}/>
                            </h2>
                        }
                        {
                            recipeDetails.whole30 === true &&
                            <h2>
                                <DietTag tagType={"whole30"}/>
                            </h2>
                        }

                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
            <hr/>
            <div className="row wbdv-widget-interior">
                <div className="col-12 col-md-6">
                    {/*Ingredients Section*/}
                    <h3 className="h3">Ingredients:</h3>
                    <ul>
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