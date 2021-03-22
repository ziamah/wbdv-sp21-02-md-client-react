import React from "react";
import "../../index.css";
import NavigationLinks from "./navigation-links";

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
                        <i className="fas fa-2x fa-pepper-hot"></i>
                    </div>
                    <h3 className="col-3 d-none d-md-block wbdv-site-title">
                        App Name
                    </h3>
                    <div className="col-4">
                        <NavigationLinks props={this.props}></NavigationLinks>
                    </div>
                    <div className="col-3">
                        <input className="form-control wbdv-center-in-div"
                               placeholder="Search"/>
                    </div>
                    <div className="col-1  wbdv-center-in-div">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        )
    }
}
