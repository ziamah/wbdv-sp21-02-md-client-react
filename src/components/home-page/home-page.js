import React from "react";
import FeaturedRecipeCard from "./featured-recipe-card";
import FavoritesWidget from "./favorites-widget";
import SignUpWidget from "./sign-up-widget";

class HomePage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-4 d-none d-lg-block">
                    {/*TODO: Should choose one of these two widgets depending on whether user is signed in*/}
                    <SignUpWidget title={"Not signed in?"}
                                  page={"home"}/>
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