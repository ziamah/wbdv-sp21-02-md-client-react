const FAVORITES_URL = "http://localhost:8080/api/favorites";

export const findFavoritesByUserId = (UserId) =>
    fetch(`${FAVORITES_URL}/user/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())

//export const findFavoritesObjectByUserId = (UserId) =>
//    fetch(`${FAVORITES_URL}/object/user/${UserId}`, {
//        method: 'GET'
//    })
//        .then(response => response.json())

//export const findFavoritesObjectByUserId = (userId) =>
//    fetch(`${FAVORITES_URL}`, {
//        method: 'GET'
//    })
//        .then(allFavorites => allFavorites.filter(favorite => favorite.userId == userId))


export const findAllFavorites = () =>
    fetch(`${FAVORITES_URL}`)
        .then(response => response.json())


export const findFavoritesObjectByUserId = async (userId) =>{
    const allFavorites = await findAllFavorites();
    console.log(allFavorites);
    return allFavorites.filter(favorite => favorite.userId == userId)
}

export default {
    findFavoritesByUserId,
    findFavoritesObjectByUserId,
    findAllFavorites
}