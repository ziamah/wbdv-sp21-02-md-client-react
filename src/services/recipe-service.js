import API_KEY_const from "../api";

const API_KEY = API_KEY_const

const findRecipesByTitle = (title) => {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${title}`)
        .then(response => response.json())
}

//const findRecipesByTitle = (title) => {
    //return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${title}`,
    //{
    //       	"method": "GET",
    //       	"headers": {
    //       		"x-rapidapi-key": "2734409e9bmsh626a6d4ad97d00bp1f41a3jsnd26d97b04030",
    //       		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    //       	}
    //       })
    //        .then(response => response.json())

    //return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course", {
    //	"method": "GET",
    //	"headers": {
    //		"x-rapidapi-key": "2734409e9bmsh626a6d4ad97d00bp1f41a3jsnd26d97b04030",
    //		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    //	}
    //})
    //.then(response => {
    //	console.log(response);
    //})
    //.catch(err => {
    //	console.error(err);
    //});



//}

const findRecipesByID = (ID) => {
    return fetch(`https://api.spoonacular.com/recipes/${ID}/information?apiKey=${API_KEY}`)
        .then(response => response.json())
}

export default {
    findRecipesByTitle, findRecipesByID
}