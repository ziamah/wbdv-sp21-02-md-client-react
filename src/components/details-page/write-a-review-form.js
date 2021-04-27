import {Link, useHistory, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {createReview} from "../../services/review-service";
import userService from "../../services/users-service";
import RAPID_API_KEY_const from "../../api";
import recipeService from "../../services/recipe-service"

const WriteAReview = (user) => {
    const {id} = useParams()
    const [rating, setRating] = useState("1");
    const [reviewText, setReviewText] = useState("");
    const [reviewTitle, setReviewTitle] = useState("");
    const [currentUser, setCurrentUser] = useState(undefined)
    const history = useHistory()
    const [state, setState] = useState(false);
    const RAPID_API_KEY = RAPID_API_KEY_const
    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => {
        const getDetails = async () => {
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
        };
        getDetails()

        userService.getCurrentUser()
            .then((user) => {
                if (user !== null) {
                    setCurrentUser(user)
                }
            })
    }, [])


    const handleSubmit = async () => {
        console.log("user id", user.userID)
        console.log("recipe name is", recipeDetails.title)
        const newReview = {
            userID: currentUser.userID,
            recipeID: id,
            rating: rating,
            reviewText: reviewText,
            reviewTitle: reviewTitle,
            reviewer: currentUser.userName,
            recipeName: recipeDetails.title
        }
        await createReview(id, newReview)
         //   .then(() => {history.push(`/details/${id}`)})

    }

    return (
        <div className="wbdv-widget-container-light">
            <div className="wbdv-contrast-header">
                <h3 className="wbdv-center-in-div">
                    Write a review
                </h3>
            </div>
            <div className="wbdv-widget-interior">
                <label htmlFor="star-rating-select" className="wbdv-padded-icon">
                    Choose a rating:
                </label>
                <select id="star-rating-select"
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                        className="form-control">
                    <option value="1">&#9733;</option>
                    <option value="2">&#9733; &#9733;</option>
                    <option value="3">&#9733; &#9733; &#9733;</option>
                    <option value="4">&#9733; &#9733; &#9733; &#9733;</option>
                    <option value="5">&#9733; &#9733; &#9733; &#9733; &#9733;</option>
                </select>
            </div>
            <div className="wbdv-widget-interior">
                <textarea className="col-12"
                          placeholder="Write your review here."
                          onChange={(event) => setReviewText(event.target.value)}
                          value={reviewText}></textarea>
            </div>
            <div className="row wbdv-center-in-div">
                {/*TODO: Enable button to post new review to the server*/}
                <Link to={`/details/${id}`}>
                    <button className="btn wbdv-affirmative-btn"
                            onClick={async () => {
                                await handleSubmit()
                            }}>
                        POST
                    </button>
                </Link>
            </div>
            <br/>
        </div>
    )
}
export default WriteAReview