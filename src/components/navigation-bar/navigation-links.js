import {Link} from 'react-router-dom'
import userService from "../../services/users-service";
import {connect} from "react-redux";
import {useEffect, useState} from "react";

const NavigationLinks = (
    // currentUser,
    logoutUser
) => {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        userService.getCurrentUser()
            .then((user) => {
                if (user !== null) {
                    setCurrentUser(user)
                }
            })
    }, [])

    return (
        <>
            <Link to="/home">
                <button className="btn wbdv-navbar-btn">
                    home
                </button>
            </Link>
            {
                currentUser !== undefined && currentUser.userRole !== "1" &&
                <Link to="/new-recipe">
                    <button className="btn wbdv-navbar-btn">
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </Link>
            }
            {
                currentUser !== undefined &&
                    <>
                        <Link to={`/profile/${currentUser.userID}`}>
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
                currentUser === undefined &&
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