const initialState = {
    currentUser: {}
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                currentUser: (action.user === null ? initialState.currentUser : action.user)
            }
        case "CREATE_USER":
            return {
                currentUser: action.user
            }
        case "REGISTER_USER":
            return {
                currentUser: action.user
            }
        case "LOGOUT_USER":
            return {
                currentUser: initialState.currentUser
            }
        case "CURRENT_USER":
            return {
                ...state,
                currentUser: action.user
            }

        default:
            return state
    }
}

export default userReducer;