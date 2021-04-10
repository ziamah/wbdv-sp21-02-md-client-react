const FAVORITES_URL = "http://localhost:8080/api/favorite";

export const findFavoritesByUserId = (UserId) =>
    fetch(`${FAVORITES_URL}/user/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())



export default {
    findFavoritesByUserId
}