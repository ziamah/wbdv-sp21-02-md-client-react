import {Link, useHistory} from 'react-router-dom'
import DietTagsSelector from "./diet-tags-selection";
import IngredientTagsSelector from "./ingredient-tags-selection";
import userService from '../../services/users-service'
import SignUpWidget from "../home-page/sign-up-widget";
import React, {useEffect, useState} from "react";
import {createUserRecipe} from "../../services/user-recipe-service";

const NewRecipe = () => {
    const history = useHistory()

    const [currentUser, setCurrentUser] = useState(undefined)

    const [picURL, setPicURL] = useState("");
    const [title, setTitle] = useState("");
    const [servings, setServings] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [summary, setSummary] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = async () => {
        const newUserRecipe = {
            userID: currentUser.userID,
            picURL: picURL,
            recipeName: title,
            servings: servings,
            cookTime: cookTime,
            cuisine: cuisine,
            recipeDescription: summary,
            ingredients: ingredients,
            instructions: instructions,}
        createUserRecipe(newUserRecipe)
        .then((newUserRecipe) => {
        history.push(`details/${newUserRecipe.recipeID}`)
        })
    }

    useEffect(() => {
        userService.getCurrentUser()
            .then((user) => {
                if (user !== null) {
                    setCurrentUser(user)
                }
            })
    }, [])


    // console.log(currentUser.userID)

        return (
        <>
            {
                currentUser === undefined &&
                <div className="wbdv-center-in-div">
                    <SignUpWidget title={"Sign In To Post A Recipe"} page={"new-recipe"}/>
                </div>
            }
            {
                currentUser !== undefined && currentUser.userRole === "1" &&
                <div className="wbdv-center-in-div">
                    You must be a Recipe Author to post a new recipe.
                </div>
            }
            {
                currentUser !== undefined && currentUser.userRole !== "1" &&
                <div className="wbdv-widget-container-light wbdv-widget-interior">
                    <h1 className="h1 wbdv-center-in-div">
                        New Recipe
                    </h1>
                    <hr/>
                    <div className="row">
                        <div className="col-12 col-lg-4 wbdv-padded-image">
                            <div className="row">
                                <img className="d-block w-100 wbdv-padded-img"
                                     src="https://soilhealthinstitute.org/wp-content/uploads/2016/11/thumbnail-default.jpg"
                                     alt="default-img.jpg"></img>
                            </div>
                            <div className="row wbdv-center-in-div">
                                <input id="pic-field" className="wbdv-center-in-div"
                                       placeholder="Enter picture url here"
                                       onChange={(event) => setPicURL(event.target.value)}
                                       value={picURL}/>
                            </div>
                            <br/>
                        </div>
                        <div className="col-8">
                            {/*    TODO: Connect form to server*/}

                            <p className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="title-field" className="wbdv-label">Recipe Title: </label>
                                </div>
                                <input id="title-field" className="col-lg-8 col-12"
                                       placeholder="Abuela's Famous Birria Tacos"
                                       onChange={(event) => setTitle(event.target.value)}
                                       value={title}/>
                            </p>
                            <p className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="title-field" className="wbdv-label">Servings: </label>
                                </div>
                                <input id="title-field" className="col-lg-8 col-12"
                                       placeholder="E.g. 4"
                                       onChange={(event) => setServings(event.target.value)}
                                       value={servings}/>
                            </p>
                            <p className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="title-field" className="wbdv-label">Cooktime: </label>
                                </div>
                                <input id="title-field" className="col-lg-8 col-12"
                                       placeholder="E.g. 30 minutes"
                                       onChange={(event) => setCookTime(event.target.value)}
                                       value={cookTime}/>
                            </p>
                            <p className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="title-field" className="wbdv-label">Cuisine: </label>
                                </div>
                                <input id="title-field" className="col-lg-8 col-12"
                                       placeholder="E.g. Italian"
                                       onChange={(event) => setCuisine(event.target.value)}
                                       value={cuisine}/>
                            </p>
                            <p className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="summary-field" className="wbdv-label">Summary: </label>
                                </div>
                                <textarea id="summary-field" className="form-control col-lg-8 col-12"
                                          style={{whiteSpace: "pre-wrap"}}
                                          placeholder="A few sentences describing your recipe"
                                          rows="3"
                                          onChange={(event) => setSummary(event.target.value)}
                                          value={summary}/>
                            </p>
                            {/*<p className="row">*/}
                            {/*    <div className="col-12 col-lg-2">*/}
                            {/*        <label htmlFor="diet-options" className="wbdv-label">Diet Tags: </label>*/}
                            {/*    </div>*/}
                            {/*    /!*TODO: Allow selector buttons to add diet tags*!/*/}
                            {/*    <div className="col-10">*/}
                            {/*        <div className="row">*/}
                            {/*            <DietTagsSelector classname="col-10"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</p>*/}
                            {/*<p className="row">*/}
                            {/*    <div className="col-12 col-lg-2">*/}
                            {/*        <label htmlFor="ingredient-options" className="wbdv-label">Ingredient Tags: </label>*/}
                            {/*    </div>*/}
                            {/*    /!*TODO: Allow selector buttons to add diet tags*!/*/}
                            {/*    <div className="col-10">*/}
                            {/*        <div className="row">*/}
                            {/*            <IngredientTagsSelector/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</p>*/}
                            <p className="row">
                                <div className="col-12 col-xl-2">
                                    <label htmlFor="ingredients-field" className="wbdv-label">Ingredient List: </label>
                                </div>

                                    <textarea id="ingredients-field"
                                              style={{whiteSpace: "pre-wrap"}}
                                              className="form-control col-xl-8 col-12" rows="5"
                                              placeholder={`1. 1 cup of water\n2. 2 large eggs\n3. ...`}
                                              onChange={(event) => setIngredients(event.target.value)}
                                              value={ingredients}/>

                            </p>
                            <p className="row">
                                <div className="col-12 col-xl-2">
                                    <label htmlFor="instructions-field" className="wbdv-label">Instructions: </label>
                                </div>
                                <textarea id="instructions-field"
                                          style={{whiteSpace: "pre-wrap"}}
                                          className="form-control col-xl-8 col-12" rows="7"
                                          placeholder="Write the recipe steps here"
                                          onChange={(event) => setInstructions(event.target.value)}
                                          value={instructions}/>
                            </p>
                            <div className="row wbdv-center-in-div">
                                {/*<Link to="/details">*/}
                                    <button className="btn wbdv-affirmative-btn"
                                            onClick={() => {
                                        handleSubmit()
                                    }}>
                                        Submit
                                    </button>
                                {/*</Link>*/}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default NewRecipe