import React from "react";
import FeaturedRecipeCard from "./featured-recipe-card";
import FavoritesWidget from "./favorites-widget";

class HomePage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-4 d-none d-lg-block">
                    <FavoritesWidget/>
                </div>
                <div className="col-8">
                    <FeaturedRecipeCard/>
                </div>
            </div>
        )
    }
}

export default HomePage