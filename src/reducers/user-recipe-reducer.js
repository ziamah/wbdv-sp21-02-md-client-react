import React from 'react'

const initialState = {
  userRecipes: []
};

const userRecipeReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_USER_RECIPE":
      return {
        ...state,
        userRecipes: [
            ...state.userRecipes,
            action.userRecipes
        ]
      }
    // case "DELETE_USER_RECIPE":
    //   return {
    //     userRecipes: state.userRecipes.filter(rec => {
    //       if (rec._id === action.recToDelete._id) {
    //         return false
    //       } else {
    //         return true
    //       }
    //     })
    //   }

    default:
      return state
  }
}

export default userRecipeReducer;