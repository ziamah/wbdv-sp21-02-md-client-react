const baseUrl = process.env.REACT_APP_USERS_URL;

export const findUserRecipesByUserId = (userId) =>
    fetch(`${baseUrl}/users/${userId}/userrecipes`, {
        method: 'GET'
    })
        .then(response => response.json())

const api = {
    findUserRecipesByUserId
}

export default api