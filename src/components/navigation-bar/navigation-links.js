import {Link} from 'react-router-dom'
import userService from "../../services/users-service";
import {connect} from "react-redux";

const NavigationLinks = (
    currentUser,
    logoutUser
) => {
    currentUser = userService.getCurrentUser();
    return (
        <>
            <Link to="/home">
                <button className="btn wbdv-navbar-btn">
                    home
                </button>
            </Link>
            {
                currentUser.userName !== undefined && currentUser.userRole !== "1" &&
                <Link to="/new-recipe">
                    <button className="btn wbdv-navbar-btn">
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </Link>
            }
            {
                currentUser.userName !== undefined &&
                    <>
                        <Link to="/profile">
                            <button className="btn wbdv-navbar-btn">profile</button>
                        </Link>
                        <Link to="/home">
                            <button className="btn wbdv-navbar-btn"
                                    onClick={() => userService.logoutUser()}>
                                logout
                            </button>
                        </Link>
                    </>
            }
            {
                currentUser.userName === undefined &&
                <Link to="/login">
                    <button className="btn wbdv-navbar-btn">
                        sign in
                    </button>
                </Link>
            }
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

export default connect(stpm, dtpm)
(NavigationLinks)