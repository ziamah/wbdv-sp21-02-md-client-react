import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import userService from '../../services/users-service'
import {Alert} from "react-bootstrap";
import followerService from "../../services/follower-service";

const Register = (
    {
        //createUser,
        registerUser,
    }
) => {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUsername] = useState("");
    const [role, setRole] = useState("1");
    const [validatingPassword, setValidatingPassword] = useState("");
    const [inputAlert, setInputAlert] = useState(false);
    const [passwordAlert, setPasswordAlert] = useState(false);

    const validateForm = () => {
        if (email.length <= 0 || password.length <= 0 || userName.length <= 0) {
            setInputAlert(true)
            return false;
        } else if (password !== validatingPassword ) {
            setInputAlert(false)
            setPasswordAlert(true)
            return false;
        } else {
            return true
        }
    }
    const handleSubmit = async () => {
        const valid = validateForm();
        if (valid) {
            const newUser = {userName: userName, userPW: password, userRole: role, userEmail: email}
            registerUser(newUser)
            .then((user) => {
                followerService.createFollower({userID:user.userId,userFollowing:[],userFollowed:[]})
                .then(() => history.push("/home"))
            })
    }

    return (
        <div className="container-fluid">
            <div className="wbdv-center-in-div">
                <div className="wbdv-padded-img">
                    <i className="fas fa-2x fa-pepper-hot"></i>
                </div>
            </div>
            <div className="wbdv-padded-img">
                <h1 className="h1 wbdv-center-in-div">
                    Create RecipeHero Account
                </h1></div>

            {
                inputAlert &&
                <Alert variant='danger'>
                    Make sure you fill in all fields and try again.
                </Alert>
            }
            {
                passwordAlert &&
                <Alert variant='danger'>
                    Make sure that your passwords match!
                </Alert>
            }

            <form>
                <div className="mb-4 row">
                    <div className="container-sm">
                        <input type="text"
                               placeholder="Username"
                               title="Please type your username"
                               className="form-control"
                               id="username"
                               onChange={(event) => setUsername(event.target.value)}
                               value={userName}/>
                    </div>
                </div>
                <div className="mb-4 row">
                    <div className="container-sm">
                        <input type="email"
                               placeholder="Email"
                               title="Please type your email"
                               className="form-control"
                               id="email"
                               onChange={(event) => setEmail(event.target.value)}
                               value={email}/>
                    </div>
                </div>

                <div className="mb-4 row">
                    <div className="container-sm">
                        <select onChange={(e) => setRole(e.target.value)}
                                value={role} className="form-control">
                            <option value={"1"}>Basic User</option>
                            <option value={"2"}>Recipe Author</option>
                            <option value={"3"}>Staff</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 row">
                    <div className="container-sm">
                        <input type="password"
                               placeholder="Password"
                               title="Please type your password"
                               className="form-control"
                               id="password"
                               onChange={(event) => setPassword(event.target.value)}
                               value={password}/>
                    </div>
                </div>
                <div className="mb-4 row">
                    <div className="container-sm">
                        <input type="password"
                               placeholder="Re-enter Password"
                               className="form-control"
                               id="inputPassword"
                               onChange={(event) => setValidatingPassword(event.target.value)}
                               value={validatingPassword}/>
                        <div className="wbdv-padded-img">
                            <Link className="wbdv-link-text" to={"/login"}>
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </div>
            </form>

            <div className="row wbdv-center-in-div">
                {/*<Link to="/home">*/}
                    <button className="btn wbdv-affirmative-btn"
                            onClick={async () => {
                                await handleSubmit()
                            }}>
                        REGISTER ACCOUNT
                    </button>
                {/*</Link>*/}
            </div>
            <div className="wbdv-center-in-div wbdv-widget-interior">
                or
            </div>
            <div className="row wbdv-center-in-div">
                <Link to="/home">
                    <Link className="wbdv-link-text" to={"/home"}>
                        Continue as Guest
                    </Link>
                </Link>
            </div>
        </div>

    );
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser
})

const dtpm = (dispatch) => ({

    createUser: (user) =>
        userService.createUser(user)
            .then(user => dispatch({
                type: "CREATE_USER",
                user: user
            })),

    attemptUserLogin: (username, password) =>
        userService.loginUser(username, password)
            .then(user => dispatch({
                type: "LOGIN_USER",
                user: user
            })),

    registerUser: (user) =>
        userService.registerUser(user)
            .then(user => dispatch({
                type: "REGISTER_USER",
                user: user
            })),

    getCurrentUser: () =>
        userService.getCurrentUser()
            .then(user => dispatch({
                type: "CURRENT_USER",
                user: user
            }))
}
)

export default connect(stpm, dtpm)
(Register)