import React, {useState, useEffect} from 'react'
import {Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import userService from '../../services/users-service'


const Login = (
    {
        attemptUserLogin,
    }
) => {
    const history = useHistory()
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => userName.length > 0 && password.length > 0;

    const handleSubmit = async () => {
        await attemptUserLogin({userName: userName, userPW: password})
            .then((user) => {
                if (user === null) {
                    alert("Uh oh! That login information wasn't correct. You have not been signed in.")
                } else {
                    history.push("/home")
                }
            }
            )
    };

    return (
        <div className="container-fluid">
            <div className="wbdv-center-in-div">
                <div className="wbdv-padded-img">
                    <i className="fas fa-2x fa-pepper-hot"></i>
                </div>
            </div>
            <div className="wbdv-padded-img">
                <h1 className="h1 wbdv-center-in-div">
                    Sign In
                </h1> </div>
            {/*{current ? typeof current.userName : current === {} ?  "{}" : "not fetching"}*/}
            <div className="mb-4 row">
                <div className="container-sm">
                    {/*<div>*/}
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
                    <input type="password"
                           placeholder="Password"
                           className="form-control"
                           id="inputPassword"
                           onChange = {(event) =>  setPassword(event.target.value)}
                           value={password}/>

                    <div className="wbdv-padded-img">
                        <Link className="wbdv-link-text" to={"#"}>
                            Forgot Password?
                        </Link>
                        <Link className="wbdv-link-text float-right" to={"/home"}>
                            Continue as Guest
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row wbdv-center-in-div">
                {/*<Link to="/home">*/}
                    <button className="btn wbdv-affirmative-btn"
                            onClick = {async () => {
                                validateForm();
                                await handleSubmit()
                            }}>
                        SIGN IN
                    </button>
                {/*</Link>*/}
            </div>
            <div className="wbdv-center-in-div wbdv-widget-interior">
                or
            </div>
            <div className="row wbdv-center-in-div"><Link to={"/register"}>
                    <button className="btn wbdv-affirmative-btn">
                        CREATE AN ACCOUNT
                    </button>
                </Link>

            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;

        </div>

    );
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser
})

const dtpm = (dispatch) => ({

    attemptUserLogin: (username, password) =>
        userService.loginUser(username, password)
            .then(user => dispatch({
                type: "LOGIN_USER",
                user: user
            })),
    getCurrentUser: () =>
        userService.getCurrentUser()
            .then(user => dispatch({
                type: "CURRENT_USER",
                user: user
            }))
})


export default connect(
        stpm,
        dtpm)
    (Login)






