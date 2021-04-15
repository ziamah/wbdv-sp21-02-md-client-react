const USER_RECIPES_URL = "http://localhost:8080/api/userrecipe";

export const findUserRecipesByUserId = (UserId) =>
    fetch(`${USER_RECIPES_URL}/user/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())



export default {
    findUserRecipesByUserId
}