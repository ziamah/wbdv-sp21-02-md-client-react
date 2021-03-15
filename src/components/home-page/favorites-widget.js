const FavoritesWidget = () => {
    return (
        <div className="wbdv-widget-container">
            <div className="wbdv-contrast-header">
                <h3 className="wbdv-center-in-div">Recent Favorites</h3>
            </div>
            {/*TODO: These should be filled programmatically!*/}
            <div className="wbdv-widget-interior">
            <div>
                <img className="d-block w-100 wbdv-padded-img"
                     src="https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg"
                     alt="birria-img.jpg"/>
                <h5 className="h5 wbdv-center-in-div">Recipe Name</h5>
                {/*TODO: Should link to recipe detail page*/}
                <p className="wbdv-body-text">Recipe detail text</p>
            </div>
            <hr/>
            <div>
                <img className="d-block w-100 wbdv-padded-img"
                     src="https://media.riverford.co.uk/images/chicken-pepper-and-maftoul-bowl-with-saffron-and-olives-2000x1333-17a54aa939517c7d7534e92d9b0534ec.jpg"
                     alt="chicken-maftoul-img.jpg"/>
                <h5 className="h5 wbdv-center-in-div">Recipe Name</h5>
                {/*TODO: Should link to recipe detail page*/}
                <p className="wbdv-body-text">Recipe detail text</p>
            </div>
            <hr/>
            <div>
                <img className="d-block w-100 wbdv-padded-img"
                     src="https://www.parsnipsandpastries.com/wp-content/uploads/2019/04/FullSizeRender-33-2000x1333.jpg"
                     alt="shakshuka-img.jpg"/>
                <h5 className="h5 wbdv-center-in-div">Recipe Name</h5>
                {/*TODO: Should link to recipe detail page*/}
                <p className="wbdv-body-text">Recipe detail text</p>
            </div>
        </div>
        </div>

    )
}

export default FavoritesWidget