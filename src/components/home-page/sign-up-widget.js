import {Link} from "react-router-dom";

const SignUpWidget = () => {
    return (
        <div className="wbdv-widget-container">
            <div className="wbdv-contrast-header">
                <h3 className="wbdv-center-in-div">Not signed in?</h3>
            </div>
            <div className="wbdv-widget-interior">
                <div className="row wbdv-center-in-div">
                    {/*TODO: set Link address to sign in page*/}
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
                    <Link to={"#"}>
                        <button className="btn wbdv-affirmative-btn">
                            CREATE AN ACCOUNT
                        </button>
                    </Link>
                </div>
                <br/>
            </div>

        </div>
    )
}

export default SignUpWidget