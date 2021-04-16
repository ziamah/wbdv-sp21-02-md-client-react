const baseUrl = process.env.REACT_APP_USERS_URL;

/* CRUD operations */

/* Permanently removes a favorite object from the database when a user "unfavorites" a recipe */
export const deleteFavorite = (favoriteId) =>
    fetch(`${baseUrl}/favorites/${favoriteId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

/* Adds a new favorite object to the database when a user "favorites" a recipe */
export const createFavorite = (favorite) =>
    fetch(`${baseUrl}/favorites`, {
        method: 'POST',
        body: JSON.stringify(favorite),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

/* Returns a list of all favorite objects in the database */
export const findAllFavorites = () =>
    fetch(`${baseUrl}/favorites`)
        .then(response => response.json())

/* Returns a list of all favorite objects in the database for a given recipeID */
export const findFavoritesByRecipe = async (recipeId) => {
    const allFavorites = await findAllFavorites();
    return allFavorites.filter(favorite => favorite.recipeId === recipeId)
}

/* Returns a list of all favorite objects in the database for a given userID */
export const findFavoritesByUser = async (userId) =>{
    const allFavorites = await findAllFavorites();
    return allFavorites.filter(favorite => favorite.userId === userId)
}

const api = {
    deleteFavorite,
    createFavorite,
    findAllFavorites,
    findFavoritesByRecipe,
    findFavoritesByUser
}

export default api