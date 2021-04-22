import {Link} from 'react-router-dom'

const NavigationLinks = () => {
    return (
        <>
            {/*TODO: The links that are visible should depend on the current page and user type*/}

            <Link to="/home">
                <button className="btn wbdv-navbar-btn">
                    home
                </button>
            </Link>
            <Link to="/profile/2">
            <button className="btn wbdv-navbar-btn">profile</button>
            </Link>
            <Link to="/new-recipe">
            <button className="btn wbdv-navbar-btn">
                <i className="fas fa-plus-circle"></i>
            </button>
            </Link>
        </>
    )
}

export default NavigationLinks