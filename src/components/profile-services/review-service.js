//const REVIEWS_URL = "http://localhost:8080/api/review";
const REVIEWS_URL = "http://localhost:8080/api";

export const findReviewsByUserId = (UserId) =>
    fetch(`${REVIEWS_URL}/user/${UserId}/reviews`, {
        method: 'GET'
    })
        .then(response => response.json())



export default {
    findReviewsByUserId
}