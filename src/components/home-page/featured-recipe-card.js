import {Link} from 'react-router-dom'
import RAPID_API_KEY_const from "../../api";
import RecipeCard from "../details-page/recipe-card";
import React, {useEffect, useState} from "react";

const FeaturedRecipeCard = () => {

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomRecipeID = () => getRandomNumber(1,999999);
    const RAPID_API_KEY = RAPID_API_KEY_const

    console.log(randomRecipeID())

    const [recipeDetails, setRecipeDetails] = useState({});

    const removeTags = (str) => {
        if ((str === null) || (str === '') || (str === undefined))
            return false;
        else
            str = str.toString();
        // Regular expression to identify HTML tags in the input string. Replacing the identified HTML tag with a null
        // string. Source: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript
        return str.replace(/(<([^>]+)>)/ig, '');
    }

    function truncate(str, num_sentences) {
        if ((str === null) || (str === '') || (str === undefined))
            return false;
        else {
            str = str.toString();
            return str.split(".").splice(0, num_sentences).join(".").concat(
                ".");
        }
    }

    let summary = removeTags(recipeDetails.summary)
    summary = truncate(summary, 4)

    useEffect(() => {
        const getDetails = async () => {
            const response = await fetch(
                `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${randomRecipeID()}/information`,
                {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": `${RAPID_API_KEY}`,
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
                    }
                });
            const data = await response.json();
            setRecipeDetails(data);
            console.log(data);

            //    TODO: add "else" statement that gets recipe details from recipe service
        };
        getDetails();
    },[])


    return (
        <div className="wbdv-widget-container wbdv-widget-interior">
            <h1 className="h1 wbdv-center-in-div">
                Today's Featured Recipe:
            </h1>
            <div className="carousel slide wbdv-padded-img" data-ride="carousel">
                {/*TODO: Fill in these values programmatically*/}
                {/*<ol className="carousel-indicators">*/}
                {/*    /!*TODO: Indicators float over nav bar, need to fix*!/*/}
                {/*    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>*/}
                {/*    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>*/}
                {/*    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>*/}
                {/*</ol>*/}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100"
                             src={recipeDetails.image}
                             alt="fennel-img.jpg"/>
                    </div>
                </div>
                {/*<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">*/}
                {/*    <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                {/*    <span className="sr-only">Previous</span>*/}
                {/*</a>*/}
                {/*<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">*/}
                {/*    <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                {/*    <span className="sr-only">Next</span>*/}
                {/*</a>*/}
            </div>
            <div className="wbdv-widget-interior">
                <h3 className="h3">
                    {recipeDetails.title}
                    {/*<div className="wbdv-padded-icon float-right">*/}
                    {/*    <i className="fas fa-star"></i>*/}
                    {/*    <i className="fas fa-star"></i>*/}
                    {/*    <i className="fas fa-star"></i>*/}
                    {/*    <i className="fas fa-star"></i>*/}
                    {/*    <i className="fas fa-star-half"></i>*/}
                    {/*</div>*/}
                    <p className="wbdv-body-text col-2 float-right">
                        <i className="fas fa-heart wbdv-padded-icon color-red"></i>
                        {recipeDetails.aggregateLikes}
                    </p>
                </h3>
                <div className="row">
                    <p className="wbdv-body-text col-2">
                        Cook time: {recipeDetails.readyInMinutes} minutes
                    </p>
                    <p>
                        Servings: {recipeDetails.servings}
                    </p>
                </div>
                <hr/>

                <p className="wbdv-body-text">
                    {summary}
                </p>
                <div className="wbdv-center-in-div">
                    {/*TODO: set Link address programmatically*/}
                    <Link to={"/details/" + recipeDetails.id}>
                        <button className="btn wbdv-affirmative-btn">
                            VIEW FULL RECIPE
                        </button>
                    </Link>

                </div>


            </div>
        </div>
    )

}

export default FeaturedRecipeCard