import React, {useEffect, useState} from 'react'
import {Link, useParams, } from 'react-router-dom'
import recipeService from '../../services/recipe-service'
import API_KEY from "../../api";
import API_KEY_const from "../../api";

const SearchCard = (
    {
        key,
        id,
        title,
        image

    }) => {
    // const {imdbID} = useParams()
    // const [movie, setMovie] = useState({})
    // useEffect(() => {
    //     findMovieByImdbID()
    // }, [])
    // const findMovieByImdbID = () => {
    //     recipeService.findMovieByImdbID(imdbID)
    //         .then((data) => {
    //             setMovie(data)
    //         })
    // }
    const API_KEY = API_KEY_const
    const R_ID = id;

    useEffect(() => {
        getDetails();
    }, []);

    const [recipeDetails, setRecipeDetails] = useState([]);

    const getDetails = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${R_ID}/information?apiKey=${API_KEY}`);
        const data = await response.json();
        setRecipeDetails(data);
        console.log(data);
    };


    return (

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        {/*<img src="..." alt="..."/>*/}
                        <p>
                            <a href={recipeDetails.sourceUrl} target="_blank" rel="noopener noreferrer">
                                <h1 className="mt-2">{title}</h1>
                            </a>
                            {/*<h4 className="h3 wbdv-center-in-div"> Recipe Title</h4>*/}
                            <img className="d-block w-100 wbdv-padded-img"
                                 src={image}
                                 alt="birria-img.jpg"/>
                            {/*<img src={movie.Poster} width={100}/>*/}
                            {/*{movie.Plot}*/}
                        </p>
                    </div>
                    <div className="col-md-8" >
                        <div className="wbdv-widget-container wbdv-widget-interior">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                {/*TODO:Figure out how to render the text here:*/}
                                <p className="wbdv-body-text">
                                    <h6>Servings: {recipeDetails.servings}</h6>
                                    <h6>Cook Time: {recipeDetails.readyInMinutes} minutes</h6>
                                    <h6>Price per Serving: {recipeDetails.pricePerServing}</h6>
                                    <h6>Spoonacular Health Score: {recipeDetails.healthScore}</h6>

                                </p>
                                <Link to={"/details/" + id} >
                                    <button className="btn wbdv-affirmative-btn">
                                        VIEW FULL RECIPE
                                    </button>
                                </Link>
                                <p className="card-text"><small className="text-muted">Last updated 3
                                    mins
                                    ago</small></p>
                            </div>
                        </div>
                    </div>
                    {/*{JSON.stringify(movie)}*/}
                </div>
            </div>


    )
}
export default SearchCard


