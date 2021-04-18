import React from 'react'

const initialState = {
    currentUserFavorites: []
};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_FAVORITE":
            return {
                currentUserFavorites: [
                    ...state.currentUserFavorites,
                    action.favorite
                ]
            }
        case "DELETE_FAVORITE":
            return {
                currentUserFavorites: state.currentUserFavorites.filter(favorite => {
                    return favorite.id !== action.favoriteToDelete;
                })
            }
        case "FIND_FAVORITES_FOR_USER":
            return {
                ...state,
                currentUserFavorites: action.favorites
            }
        case "FIND_FAVORITES_FOR_RECIPE":
            return {
                currentUserFavorites: action.favorites
            }
        default:
            return state
    }
}

export default favoritesReducer();