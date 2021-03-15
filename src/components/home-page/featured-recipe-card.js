const FeaturedRecipeCard = () => {
    return (
        <div className="wbdv-widget-container wbdv-widget-interior">
            <h1 className="h1 wbdv-center-in-div">
                Today's Featured Recipes:
            </h1>
            <div className="carousel slide wbdv-padded-img" data-ride="carousel">
                {/*TODO: Fill in these values programmatically*/}
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100"
                             src="https://www.tastecooking.com/wp-content/uploads/2019/10/Article-Caramelized-Fennel-Fronds-Pollen-Recipe-2000x1333.jpg"
                             alt="fennel-img.jpg"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )

}

export default FeaturedRecipeCard