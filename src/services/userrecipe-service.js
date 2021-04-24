//const USER_RECIPES_URL = "http://localhost:8080/api/userrecipe";
//const USER_RECIPES_URL = "http://localhost:8080/api";
const baseUrl = process.env.REACT_APP_USERS_URL;

export const findUserRecipesByUserId = (UserId) =>
    fetch(`${baseUrl}/user/${UserId}/userrecipes`, {
        method: 'GET'
    })
        .then(response => response.json())



export default {
    findUserRecipesByUserId
}