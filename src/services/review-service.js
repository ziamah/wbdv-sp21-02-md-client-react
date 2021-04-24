//const REVIEWS_URL = "http://localhost:8080/api/review";
//const REVIEWS_URL = "http://localhost:8080/api";
const baseUrl = process.env.REACT_APP_USERS_URL;

export const findReviewsByUserId = (UserId) =>
    fetch(`${baseUrl}/review/user/${UserId}/reviews`, {
        method: 'GET'
    })
        .then(response => response.json())



export default {
    findReviewsByUserId
}