import DietTag from "./diet-tag";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import RAPID_API_KEY_const from "../../api";
import favoritesService, {findFavoritesByRecipe} from "../../services/favorites-service";

const RecipeCard = ({user}) => {
    const {id} = useParams()
    const RAPID_API_KEY = RAPID_API_KEY_const

    const [recipeDetails, setRecipeDetails] = useState({});
    const [favoriteId, setFavoriteId] = useState(undefined)
    const [favoritesCount, setFavoritesCount] = useState()
    const [isFavorite, setIsFavorite] = useState(false)
    const [userRecipeDetails, setUserRecipeDetails] = useState({});


    useEffect(() => {
        const getFavoritesInfo = async () => {
            const favorites = await findFavoritesByRecipe(id)
                .then(favorites => favorites);
            setFavoritesCount(favorites.length);
            if (user !== undefined) {
                const currentUserFavorite = favorites.find(
                    favorite => favorite.userId === user.userID)
                if (currentUserFavorite !== undefined) {
                    setIsFavorite(true);
                    setFavoriteId(currentUserFavorite.favoriteId)
                }
            }
        }

        const getDetails = async () => {
            if (!id.toString().includes("hero_")) {
                const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": `${RAPID_API_KEY}`,
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
                    }
                });
                const data = await response.json();
                setRecipeDetails(data);
            }
            //    TODO: add "else" statement that gets recipe details from recipe service
        };
        getDetails();
        getFavoritesInfo();
        getUserDetails();
    }, []);

    const getDetails = async () => {
        if (!id.toString().includes("hero_")) {
            const response = await fetch(
                `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
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
        }
        //    TODO: add "else" statement that gets recipe details from recipe service
    };

    const getUserDetails = async () => {
        const response = await fetch(
            `https://recipehero2021-backend3.herokuapp.com/api/userrecipes`);
            // 'http://localhost:8080/api/userrecipes');
        const data = await response.json();

        var results = data.filter(function (data) {
            return data.recipeID == id;
        });

        var object = results[0];

        setUserRecipeDetails(object);
    };

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

    if (id.startsWith("hero")) {
        return (<div className="col-12 wbdv-widget-container wbdv-widget-interior">
                <div className="col-12">
                    <h1 className="h1 wbdv-center-in-div"> {userRecipeDetails.recipeName} </h1>
                    {
                        id.includes("hero_") && user !== undefined &&
                        <a className="wbdv-link-text wbdv-center-in-div"
                           href={`/profile/${user.userID}`}>From {user.userName}</a>
                    }
                </div>
                <hr/>
                <div className="row wbdv-widget-interior wbdv-center-in-div">
                    {/* TODO: Delete button should also be visible if recipe is user-submitted and currentUser.userID === recipe.userID */}
                    {
                        id.includes("hero_") && user !== undefined
                        && user.userRole === "3" &&
                        <button className="btn wbdv-danger-btn">
                            {/* TODO: delete recipe onClick -- should we add an "are your sure?" modal? */}
                            DELETE RECIPE
                        </button>
                    }
                </div>
                <div className="row wbdv-widget-interior">
                    <div className="col-12 col-sm-6">
                        <img className="d-block w-100 wbdv-padded-img"
                             src={userRecipeDetails.picURL}
                             alt="birria-img.jpg"/>
                    </div>
                    <div className="col-12 col-sm-6">
                        {/*Basic Info Section*/}
                        <p className="row wbdv-body-text">
                            {userRecipeDetails.recipeDescription}
                        </p>
                        <p className="row">
                            <div className="wbdv-body-text">
                                {
                                    user !== undefined && isFavorite &&
                                    <i className="fas fa-heart wbdv-padded-icon"
                                       onClick={async () => {
                                           console.log(favoriteId)
                                           await favoritesService.deleteFavorite(
                                               favoriteId);
                                           setFavoriteId(undefined)
                                           setIsFavorite(false)
                                           setFavoritesCount(favoritesCount - 1)
                                       }
                                       }></i>
                                }
                                {
                                    user !== undefined && !isFavorite &&
                                    <i className="far fa-heart wbdv-padded-icon"
                                       onClick={async () => {
                                           await favoritesService.createFavorite(
                                               {
                                                   userId: user.userID,
                                                   recipeId: id,
                                                   recipeName: userRecipeDetails.recipeName,
                                                   recipePhotoUrl: userRecipeDetails.image
                                               });
                                           findFavoritesByRecipe(id)
                                               .then((favorites) => {
                                                   const favorite = favorites.find(
                                                       favorite => favorite.userId
                                                           === user.userID)
                                                   if (favorite !== undefined) {
                                                       setFavoriteId(
                                                           favorite.favoriteId)
                                                       console.log(
                                                           favorite.favoriteId)
                                                   }
                                               })
                                           setIsFavorite(true)
                                           setFavoritesCount(favoritesCount + 1)
                                       }
                                       }></i>
                                }
                                {
                                    user === undefined &&
                                    <i className="fas fa-heart wbdv-padded-icon"></i>
                                }
                                {favoritesCount}
                            </div>
                            {/* TODO: use reviews service to display correct number of stars */}
                            <div
                                className="wbdv-padded-icon wbdv-body-text wbdv-verticalLine">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </p>
                        <div className="row">
                            <div className="wbdv-body-text">
                                Servings: {userRecipeDetails.servings}
                            </div>
                        </div>
                        <div className="row">
                            <div className="wbdv-body-text">
                                Cook
                                Time: {userRecipeDetails.cookTime}
                            </div>
                        </div>
                        <div className="row">
                            <div className="wbdv-body-text">
                                Cuisine: {userRecipeDetails.cuisine}
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="wbdv-body-text">
                                Tags:
                            </div>
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
                            {
                                userRecipeDetails.ingredients != undefined &&
                                userRecipeDetails.ingredients.split("\n").map((item) => {
                                    return (
                                        <li key={item}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 wbdv-body-text">
                        {/*Instructions Section*/}
                        <h3 className="h3">Instructions:</h3>
                        <ol>
                            {
                                userRecipeDetails.ingredients != undefined &&
                                userRecipeDetails.instructions.split("\n").map((item) => {
                                    return (
                                        <li key={item}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>

                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="col-12 wbdv-widget-container wbdv-widget-interior">
                <div className="col-12">
                    <h1 className="h1 wbdv-center-in-div"> {recipeDetails.title} </h1>
                    <a className="wbdv-link-text wbdv-center-in-div"
                       href={recipeDetails.sourceUrl}>From {recipeDetails.sourceName}</a>
                </div>
                <hr/>
                <div className="row wbdv-widget-interior wbdv-center-in-div">
                    {/* TODO: Delete button should also be visible if recipe is user-submitted and currentUser.userID === recipe.userID */}
                    {
                        id.includes("hero_") && user !== undefined
                        && user.userRole === "3" &&
                        <button className="btn wbdv-danger-btn">
                            {/* TODO: delete recipe onClick -- should we add an "are your sure?" modal? */}
                            DELETE RECIPE
                        </button>
                    }
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
                                {
                                    user !== undefined && isFavorite &&
                                    <i className="fas fa-heart wbdv-padded-icon"
                                       onClick={async () => {
                                           console.log(favoriteId)
                                           await favoritesService.deleteFavorite(
                                               favoriteId);
                                           setFavoriteId(undefined)
                                           setIsFavorite(false)
                                           setFavoritesCount(favoritesCount - 1)
                                       }
                                       }></i>
                                }
                                {
                                    user !== undefined && !isFavorite &&
                                    <i className="far fa-heart wbdv-padded-icon"
                                       onClick={async () => {
                                           await favoritesService.createFavorite(
                                               {
                                                   userId: user.userID,
                                                   recipeId: id,
                                                   recipeName: recipeDetails.title,
                                                   recipePhotoUrl: recipeDetails.image
                                               });
                                           findFavoritesByRecipe(id)
                                               .then((favorites) => {
                                                   const favorite = favorites.find(
                                                       favorite => favorite.userId
                                                           === user.userID)
                                                   if (favorite !== undefined) {
                                                       setFavoriteId(
                                                           favorite.favoriteId)
                                                       console.log(
                                                           favorite.favoriteId)
                                                   }
                                               })
                                           setIsFavorite(true)
                                           setFavoritesCount(favoritesCount + 1)
                                       }
                                       }></i>
                                }
                                {
                                    user === undefined &&
                                    <i className="fas fa-heart wbdv-padded-icon"></i>
                                }
                                {favoritesCount}
                            </div>
                            {/* TODO: use reviews service to display correct number of stars */}
                            <div
                                className="wbdv-padded-icon wbdv-body-text wbdv-verticalLine">
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
                                Cook
                                Time: {recipeDetails.readyInMinutes} minutes
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
                                recipeDetails.diets
                                && recipeDetails.diets.includes("pescatarian")
                                &&
                                <h2>
                                    <DietTag tagType={"pescatarian"}/>
                                </h2>
                            }
                            {
                                recipeDetails.diets
                                && recipeDetails.diets.includes("paleolithic")
                                &&
                                <h2>
                                    <DietTag tagType={"paleo"}/>
                                </h2>
                            }
                            {
                                recipeDetails.diets
                                && recipeDetails.diets.includes("primal") &&
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
                            {recipeDetails.extendedIngredients
                            && recipeDetails.extendedIngredients.map(
                                (ingredient) => {
                                    return (
                                        <li>{ingredient.original}</li>
                                    )
                                })}


                        </ul>
                    </div>
                    <div className="col-12 col-md-6 wbdv-body-text">
                        {/*Instructions Section*/}
                        <h3 className="h3">Instructions:</h3>
                        <p dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeCard