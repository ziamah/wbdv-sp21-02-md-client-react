const baseUrl = process.env.REACT_APP_USERS_URL;
// const baseUrl = "https://recipehero2021-backend.herokuapp.com/";


/* CRUD operations */

/* Permanently removes a user object from the database */
export const deleteUserRecipe = (recipeID) =>
    fetch(`${baseUrl}/userrecipes/${recipeID}`, {
      method: 'DELETE'
    })
    .then(response => response.json())

/* Adds a new user object from the database */
export const createUserRecipe = (userRecipe) =>
    fetch(`${baseUrl}/userrecipes`, {
      method: 'POST',
      body: JSON.stringify(userRecipe),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

/* Updates the data for an existing user object from the database */
export const updateUserRecipe = (recipeID, userRecipe) =>
    fetch(`${baseUrl}/userrecipes/${recipeID}`, {
      method: 'PUT',
      body: JSON.stringify(userRecipe),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

/* Returns a list of all user objects in the database */
export const findAllUserRecipes = () =>
    fetch(`${baseUrl}/userrecipes`)
    .then(response => response.json());

/* Returns a user object corresponding to the supplied userId */
export const findUserRecipeById = (recipeID) =>
    fetch(`${baseUrl}/userrecipes/${recipeID}`)
    .then(response => response.json());


const api = {
  deleteUserRecipe,
  createUserRecipe,
  updateUserRecipe,
  findUserRecipeById
}

export default api