import React, {useEffect, useState} from "react";
import FeaturedRecipeCard from "./featured-recipe-card";
import FavoritesWidget from "./favorites-widget";
import SignUpWidget from "./sign-up-widget";
import userService from "../../services/users-service";

const HomePage = () => {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        userService.getCurrentUser()
            .then((user) => {
                if (user !== null) {
                    setCurrentUser(user)
                }
            })
    }, [])
    return (
        <div className="row">
            <div className="col-12 col-md-4">
                {
                    currentUser !== undefined &&
                    <FavoritesWidget user={currentUser}/>
                }
                {
                    currentUser === undefined &&
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


export default HomePage