import React from "react";
import RecipeCard from "./recipe-card";
import ReviewsWidget from "./reviews-widget";

class DetailsPage extends React.Component {
    render() {
        return (
            <div className="row">
                    <RecipeCard/>
                    <ReviewsWidget/>
            </div>
        )
    }
}

export default DetailsPage