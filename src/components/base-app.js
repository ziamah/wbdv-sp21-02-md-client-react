import React from 'react';
import {Route, Link} from "react-router-dom";

class BaseApp extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Route path="/home"></Route>
                <Route path="/profile"></Route>
                {/*<Route path="/results"></Route>*/}
                {/*<Route path="details"></Route>*/}
                <Route path="/login"></Route>
                <Route path="/register"></Route>
            </div>
        )
    }
}

export default BaseApp