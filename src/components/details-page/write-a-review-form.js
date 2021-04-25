import {Link, useParams} from "react-router-dom";
import React, {useState} from "react";
import {createReview} from "../../services/review-service";

const WriteAReview = (user) => {
    const {id} = useParams()
    const [rating, setRating] = useState("1");
    const [reviewText, setReviewText] = useState("");
    const [reviewTitle, setReviewTitle] = useState("");

    const handleSubmit = async () => {
        const newReview = {
            userID: user.userId,
            recipeID: id,
            Rating: rating,
            reviewText: reviewText,
            reviewTitle: reviewTitle
        }
        createReview(id, newReview)
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
                <Link to={"#"}>
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