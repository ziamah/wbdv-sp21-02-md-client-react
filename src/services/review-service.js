const baseUrl = process.env.REACT_APP_USERS_URL;

export const findReviewsByUserId = (userId) =>
    fetch(`${baseUrl}/user/${userId}/reviews`, {
        method: 'GET'
    })
        .then(response => response.json())

const api = {
    findReviewsByUserId
}

export default api