import React from "react";
import FeaturedRecipeCard from "./featured-recipe-card";
import FavoritesWidget from "./favorites-widget";
import SignUpWidget from "./sign-up-widget";
import userService from "../../services/users-service";

class HomePage extends React.Component {
    render() {
        const currentUser = userService.getCurrentUser();
        return (
            <div className="row">
                <div className="col-12 col-md-4">
                    {
                        currentUser.userName !== undefined &&
                        <FavoritesWidget/>
                    }
                    {
                        currentUser.userName === undefined &&
                        <SignUpWidget title={"Not signed in?"}
                                      page={"home"}/>
                    }
                </div>
                <div className="col-12 col-md-8">
                    <FeaturedRecipeCard/>
                </div>
            </div>
        )
    }
}

export default HomePage