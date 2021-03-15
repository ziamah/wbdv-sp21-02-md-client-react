import React from "react";
import FeaturedRecipeCard from "./featured-recipe-card";
import FavoritesWidget from "./favorites-widget";

class HomePage extends React.Component {
    render() {
        return (
            <>
                {/*<FeaturedRecipeCard/>*/}
                <FavoritesWidget/>
            </>
            )
    }
}

export default HomePage