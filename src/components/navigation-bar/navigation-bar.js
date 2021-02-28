import React from "react";
import "../../index.css";

export default class NavigationBar
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wbdv-navigation-bar">
                <div className="row">
                    <div className="col-1 wbdv-center-in-div">
                        <i className="fas fa-bars"></i>
                    </div>
                    <h3 className="col-3 d-none d-md-block">
                        App Name
                    </h3>
                    <div className="col-7">
                        <input className="form-control wbdv-center-in-div p"
                               placeholder="Search"/>
                    </div>
                    <div className="col-1  wbdv-center-in-div">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>
            </div>
        )
    }
}

