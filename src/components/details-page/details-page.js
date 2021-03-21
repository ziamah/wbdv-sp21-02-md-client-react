import React from "react";
import RecipeCard from "./recipe-card";
import ReviewsWidget from "./reviews-widget";

const DetailsPage = () => {
    return (
            <div className="row">
                    <RecipeCard/>
                    <ReviewsWidget/>
            </div>
        )
}

export default DetailsPage