import {Link} from 'react-router-dom'
import DietTagsSelector from "./diet-tags-selection";
import IngredientTagsSelector from "./ingredient-tags-selection";
import userService from '../../services/users-service'
import SignUpWidget from "../home-page/sign-up-widget";
import {useEffect, useState} from "react";

const NewRecipe = () => {
    const [currentUser, setCurrentUser] = useState(undefined)
    useEffect(() => {
        userService.getCurrentUser()
            .then((user) => {
                if (user !== null) {
                    setCurrentUser(user)
                }
            })
    }, [])
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
                                <button className="btn wbdv-secondary-btn">
                                    Click to add a photo
                                </button>
                            </div>
                            <br/>
                        </div>
                        <div className="col-8">
                            {/*    TODO: Connect form to server*/}

                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="title-field" className="wbdv-label">Recipe Title: </label>
                                </div>
                                <input id="title-field" className="col-lg-8 col-12"
                                       placeholder="Abuela's Famous Birria Tacos"/>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="summary-field" className="wbdv-label">Summary: </label>
                                </div>
                                <textarea id="summary-field" className="col-lg-8 col-12"
                                          placeholder="A few sentences describing your recipe"
                                          rows="3"/>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="diet-options" className="wbdv-label">Diet Tags: </label>
                                </div>
                                {/*TODO: Allow selector buttons to add diet tags*/}
                                <div className="col-10">
                                    <div className="row">
                                        <DietTagsSelector classname="col-10"/>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <label htmlFor="ingredient-options" className="wbdv-label">Ingredient Tags: </label>
                                </div>
                                {/*TODO: Allow selector buttons to add diet tags*/}
                                <div className="col-10">
                                    <div className="row">
                                        <IngredientTagsSelector/>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-xl-2">
                                    <label htmlFor="ingredients-field" className="wbdv-label">Ingredient List: </label>
                                </div>
                                <textarea id="ingredients-field" className="col-xl-8 col-12" rows="5"
                                          placeholder={`1. 1 cup of water\n2. 2 large eggs\n3. ...`}/>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-xl-2">
                                    <label htmlFor="instructions-field" className="wbdv-label">Instructions: </label>
                                </div>
                                <textarea id="instructions-field" className="col-xl-8 col-12" rows="7"
                                          placeholder="Write the recipe steps here"/>
                            </div>
                            <br/>
                            <div className="row wbdv-center-in-div">
                                <Link to="/details">
                                    <button className="btn wbdv-affirmative-btn">
                                        Submit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default NewRecipe