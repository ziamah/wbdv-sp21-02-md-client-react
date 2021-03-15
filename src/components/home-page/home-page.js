import React from "react";
import FeaturedRecipeCard from "./featured-recipe-card";
import FavoritesWidget from "./favorites-widget";

export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <FeaturedRecipeCard/>
                <FavoritesWidget/>
            </>
            )
    }
}