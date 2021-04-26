import API_KEY_const from "../api";

const API_KEY = API_KEY_const

const findRecipesByTitle = (title) => {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${title}`)
        .then(response => response.json())
}

const findRecipesByID = (recipeId) => {
    return fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`)
        .then(response => response.json())
}

const api = {
    findRecipesByTitle, findRecipesByID
}

export default api
