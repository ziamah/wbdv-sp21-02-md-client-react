import React, {useState} from 'react'
import {Link} from "react-router-dom";

const Login = () => {
    //TODO onClick use props to route to homwpage with authorization

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
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
                Sign In
            </h1> </div>

            <div className="mb-4 row">
                <div className="container-sm">
                {/*<div>*/}
                    <input type="text"
                           placeholder="Username"
                           title="Please type your username"
                           className="form-control"
                           id="username"/>
                </div>
            </div>
            <div className="mb-4 row">
                <div className="container-sm">
                    <input type="password"
                           placeholder="Password"
                           className="form-control"
                           id="inputPassword"/>

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
                {/*TODO: set Link address to sign up page*/}
                <Link to={"#"}>
                    <button className="btn wbdv-affirmative-btn">
                        SIGN IN
                    </button>
                </Link>
            </div>
            <div className="wbdv-center-in-div wbdv-widget-interior">
                or
            </div>
            <div className="row wbdv-center-in-div">
                {/*TODO: set Link address to sign up page*/}
                <Link to={"/register"}>
                    <button className="btn wbdv-affirmative-btn">
                        CREATE AN ACCOUNT
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default Login





