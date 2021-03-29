import React, {useState} from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="wbdv-widget-container-light wbdv-widget-interior">
            <h1 className="h1 wbdv-center-in-div">
                Sign In
            </h1>

            <div className="mb-3 row">
                <label htmlFor="username"
                       className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           placeholder="johnny"
                           title="Please type your username"
                           className="form-control"
                           id="username"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword"
                       className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input type="password"
                           className="form-control"
                           id="inputPassword"/>
                </div>
            </div>
        </div>

    );
}


export default Login



