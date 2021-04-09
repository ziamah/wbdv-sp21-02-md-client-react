import React from 'react'

const initialState = {
    currentUser: {}
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                currentUser: state.currentUser.map(user => {
                    if(user.id === action.user.id) {
                        // console.log("action.widget:", action.user)
                        return action.user
                    } else {
                        // console.log("widget:", user)
                        return user
                    }
                })
            }
        case "CREATE_USER":
            return state
            // return {
            //     ...state,
            //     currentUser: action.user
            // };

        default:
            return state
    }
}

export default userReducer;