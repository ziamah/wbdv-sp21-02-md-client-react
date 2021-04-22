import React, {useEffect, useState} from "react";
import RecipeCard from "./recipe-card";
import ReviewsWidget from "./reviews-widget";
import userService from "../../services/users-service";

const DetailsPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        const getUser = async () =>
            await userService.getCurrentUser()
                .then((user) => {
                    if (user !== null) {
                        setCurrentUser(user)
                    }
                })
        getUser()
            .then(response => {
                setIsLoading(false)
            })
    }, [])
    return (
        <>
            {
                !isLoading &&
                <>
                    <div className="row">
                        <RecipeCard user={currentUser}/>
                    </div>
                    <div className="row">
                        <br/>
                        <ReviewsWidget user={currentUser}/>
                    </div>
                </>
            }
        </>
    )
}

export default DetailsPage