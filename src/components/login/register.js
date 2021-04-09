import React, {useState} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import userService from '../../services/users-service'
import Login from "./login";

const Register = (
    {
        currentUser = {},
        createUser,
        attemptUserLogin
    }
) => {
    //TODO onClick use props to route to homwpage with authorization
    //Pass props to homepage
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUsername] = useState("");
    const [role, setRole] = useState("");
    // const [user, setUser] = useState({});

    const validateForm = () => email.length > 0 && password.length > 0 && userName.length > 0;
    // const handleSubmit = () => registerUser(user);
    const handleSubmit = async () => {
        const newUser = {userName: userName, userPW: password, userRole: role, userEmail: email}
        // setUser(newUser)
        await createUser(newUser)
        await attemptUserLogin(userName, password)
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

            <div className="mb-4 row">
                <div className="container-sm">
                    <input type="text"
                           placeholder="Username"
                           title="Please type your username"
                           className="form-control"
                           id="username"
                           onChange = {(event) =>  setUsername(event.target.value)}
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
                           onChange = {(event) =>  setEmail(event.target.value)}
                           value={email}/>
                </div>
            </div>

            <div className="mb-4 row">
                <div className="container-sm">
                    <select onChange={(e) => setRole(e.target.value)}
                        value={role} className="form-control">
                        <option value={1}>Basic User</option>
                        <option value={2}>Recipe Author</option>
                        <option value={3}>Staff</option>
                    </select>

                {/*    <select id="role"*/}
                {/*           placeholder="Role"*/}
                {/*           title="Please select your role"*/}
                {/*           className="form-control"*/}
                {/*</select>*/}
                </div>
            </div>

            <div className="mb-4 row">
                <div className="container-sm">
                    <input type="password"
                           placeholder="Password"
                           title="Please type your password"
                           className="form-control"
                           id="password"
                           onChange = {(event) =>  setPassword(event.target.value)}
                           value={password}/>
                </div>
            </div>
            <div className="mb-4 row">
                <div className="container-sm">
                    <input type="password"
                           placeholder="Re-enter Password"
                           className="form-control"
                           id="inputPassword"/>

                    <div className="wbdv-padded-img">
                        <Link className="wbdv-link-text" to={"/login"}>
                            Already have an account?
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row wbdv-center-in-div">
                {/*TODO: set Link address to sign up page*/}
                <Link to={"#"}>
                    <button className="btn wbdv-affirmative-btn"
                        onClick = {() => {validateForm && handleSubmit()}}>
                        REGISTER ACCOUNT
                    </button>
                </Link>
            </div>
            <div className="wbdv-center-in-div wbdv-widget-interior">
                or
            </div>
            <div className="row wbdv-center-in-div">
                {/*TODO: set Link address to sign up page*/}
                <Link to={"#"}>
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
        userService.createUser(user) //removed _id widget._id
            .then(status => dispatch({
                                         type: "CREATE_USER",
                                         user: user
                                     })),

    attemptUserLogin: (username, password) =>
        userService.loginUser(username, password) //removed _id widget._id
    .then(status => dispatch({
                                 type: "LOGIN_USER",
                                 username,
                                 password
                             }))
})

export default (connect(
        stpm,
        dtpm)
    (Register)
)

// export default Register