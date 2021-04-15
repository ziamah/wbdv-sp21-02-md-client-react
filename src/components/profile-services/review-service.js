const REVIEWS_URL = "http://localhost:8080/api/review";

export const findReviewsByUserId = (UserId) =>
    fetch(`${REVIEWS_URL}/user/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())



export default {
    findReviewsByUserId
}