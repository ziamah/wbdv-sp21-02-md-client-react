import WriteAReview from "./write-a-review-form";
import ReviewCard from "./review-card";
import SignUpWidget from "../home-page/sign-up-widget";
import React, {useEffect, useState} from "react";
import reviewService from "../../services/review-service";
import {Link, useParams} from "react-router-dom";


const ReviewsWidget = ({user}) => {
    const {id} = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        reviewService.findReviewsByRecipe(id)
            .then((reviews) => {
                setReviews(reviews)
            })
        console.log(reviews)
    }, [])

    // useEffect(() => {
    //     reviewService.findAllReviews()
    //         .then((reviews) => {
    //             setReviews(reviews)
    //         })
    //     console.log(reviews)
    // }, [])

    return (
        <div className="col-12 wbdv-widget-container wbdv-widget-interior">
            <div className="col-12">
                <h1 className="h1 wbdv-center-in-div"> Reviews</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    {
                        user !== undefined &&
                        <WriteAReview user={user}/>
                    }
                    {
                        user === undefined &&
                        <SignUpWidget title={"Sign in to leave a review"}
                                      page={"detail"}/>
                    }
                </div>
                {/*reviews.length >= 1 &&*/}
                <div className="col-12 col-md-8">
                    {reviews.map((review, index) => <ReviewCard
                        key={index}
                        user={user}
                        recipid={id}
                        rating={review.rating}
                        reviewText={review.reviewText}
                        reviewer={review.userID}
                        recipeName={review.recipeName}
                        reviewTitle={review.reviewTitle}/>

                    )}

                    {
                        reviews.length <= 0 &&
                        <div className="wbdv-center-in-div">
                            This recipe doesn't have any reviews yet. Be the first to review!
                        </div>
                    }
                    {/*TODO: Map reviews to reviewCards*/}
                    {/*<ReviewCard/>*/}
                    {/*<ReviewCard/>*/}
                    {/*<ReviewCard/>*/}
                </div>
            </div>
        </div>
    )
}

export default ReviewsWidget