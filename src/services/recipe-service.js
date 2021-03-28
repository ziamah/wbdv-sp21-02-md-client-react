import API_KEY_const from "../api";

const API_KEY = API_KEY_const

const findRecipesByTitle = (title) => {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${title}`)
        .then(response => response.json())
}

const findRecipesByID = (ID) => {
    return fetch(`https://api.spoonacular.com/recipes/${ID}/information?apiKey=${API_KEY}`)
        .then(response => response.json())
}

export default {
    findRecipesByTitle, findRecipesByID
}

// const findMoviesByTitle = (title) => {
//     return fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
//         .then(response => response.json())
// }
//
// const findMovieByImdbID = (imdbID) => {
//     return fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
//         .then(response => response.json())
// }
//
// export default {
//     findMoviesByTitle, findMovieByImdbID
// }