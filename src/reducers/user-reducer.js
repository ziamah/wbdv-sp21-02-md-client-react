import React from 'react'

const initialState = {
    currentUser: {}
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                currentUser: action.user
            }
        case "CREATE_USER":
            return {
                currentUser: action.user
            }
        case "LOGOUT_USER":
            return {
                currentUser: {}
            }
        case "CURRENT_USER":
            return {
                state
            }

        default:
            return state
    }
}

export default userReducer;