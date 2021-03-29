import React from "react";
import FeaturedRecipeCard from "./featured-recipe-card";
import FavoritesWidget from "./favorites-widget";
import SignUpWidget from "./sign-up-widget";
import SearchGrid from "../search-grid/search-grid";

class HomePage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-4">
                    {/*TODO: Should choose one of these two widgets depending on whether user is signed in*/}
                    <SignUpWidget title={"Not signed in?"}
                                  page={"home"}/>
                    <FavoritesWidget/>
                </div>
                <div className="col-12 col-md-8">
                    <FeaturedRecipeCard/>
                </div>
            </div>
        )
    }
}

export default HomePage