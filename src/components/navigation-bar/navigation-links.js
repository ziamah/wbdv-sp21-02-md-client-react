import {Link} from 'react-router-dom'
import userService from "../../services/users-service";
import {connect} from "react-redux";

const NavigationLinks = (
    currentUser = {},
    logoutUser
) => {
    currentUser = userService.getCurrentUser();
    console.log(currentUser.userName)
    return (
        <>
            {/*TODO: The links that are visible should depend on the current page and user type*/}

            <Link to="/home">
                <button className="btn wbdv-navbar-btn">
                    home
                </button>
            </Link>
            <Link to="/profile">
                <button className="btn wbdv-navbar-btn">profile</button>
            </Link>
            <Link to="/home">
                <button className="btn wbdv-navbar-btn"
                        onClick={() => logoutUser()}>
                    logout
                </button>
            </Link>
            <Link to="/login">
                <button className="btn wbdv-navbar-btn">
                    sign in
                </button>
            </Link>
            <Link to="/new-recipe">
                <button className="btn wbdv-navbar-btn">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </Link>

        </>
    )
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser
})

const dtpm = (dispatch) => ({
    logoutUser: () =>
        userService.logoutUser()
            .then(status => dispatch({
                type: "LOGOUT_USER"
            })),
    getCurrentUser: () =>
        userService.getCurrentUser()
            .then(user => dispatch({
                type: "CURRENT_USER",
                user: user
            }))
})

export default (connect(
    stpm,
    dtpm)
(NavigationLinks))