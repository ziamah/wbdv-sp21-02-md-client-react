
import {findAllFavorites} from "./favorites-service";

const baseUrl = process.env.REACT_APP_USERS_URL;

/* CRUD operations */

/* Permanently removes a review object from the database when a user deletes a review */
export const deleteReview = (reviewId) =>
    fetch(`${baseUrl}/reviews/${reviewId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

/* Adds a new review object to the database when a user creates a recipe review */
export const createReview = (recipeId, review) =>
    fetch(`${baseUrl}/recipe/${recipeId}/reviews`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

/* Updates an existing review object from the database */
export const updateUser = (reviewId, review) =>
    fetch(`${baseUrl}/reviews/${reviewId}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

/* Returns a list of all review objects in the database */
export const findAllReviews = () =>
    fetch(`${baseUrl}/reviews`)
        .then(response => response.json());

/* Returns a list of all review objects in the database for a given recipeID */
export const findReviewsByRecipe = async (recipeId) => {
    const allFavorites = await findAllReviews();
    return allFavorites.filter(favorite => favorite.recipeID === recipeId)
    // fetch(`${baseUrl}/recipe/${recipeId}/reviews`)
    //     .then(response => response.json())

}

//Note: MZ did not change this method since it was already here.
export const findReviewsByUserId = (UserId) =>
    fetch(`${baseUrl}/user/${UserId}/reviews`, {
        method: 'GET'
    })
        .then(response => response.json())

    /* Returns the average user rating for a recipe */
    export const findAvgReview = async (recipeId) => {
        const allReviews  = await findReviewsByRecipe(recipeId)
        let ratings = []
        allReviews.map((review) => ratings.push(parseInt(review.rating)))

        let sum = ratings.reduce((a, b) => a + b, 0);

        let avg = 0
        if(allReviews.length > 0) {  avg = sum/allReviews.length }
        console.log("average:", avg)
        return Math.round(avg)
        // fetch(`${baseUrl}/recipe/${recipeId}/reviews/rating`)
        //     .then(response => response.json())
    }

    const api = {
        deleteReview,
        createReview,
        updateUser,
        findAllReviews,
        findReviewsByRecipe,
        findReviewsByUserId,
        findAvgReview
    }

    export default api

// export default {
//     findReviewsByUserId
// }
