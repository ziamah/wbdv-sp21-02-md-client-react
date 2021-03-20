const NavigationLinks = () => {
    return (
        <>
            {/*TODO: The links that are visible should depend on the current page and user type*/}
            <button className="btn wbdv-navbar-btn">home</button>
            <button className="btn wbdv-navbar-btn">profile</button>
            <button className="btn wbdv-navbar-btn">
                <i className="fas fa-plus-circle"></i>
            </button>
        </>
    )
}

export default NavigationLinks