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
            <div className="wbdv-widget-interior">
                <h3 className="h3">
                    Recipe Name
                    <div className="wbdv-padded-icon float-right">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                    </div>
                </h3>
                <div className="row">
                    <p className="wbdv-body-text col-2">
                        60 minutes
                    </p>
                    <p className="wbdv-body-text col-2">
                        <i className="fas fa-heart wbdv-padded-icon"></i>
                        16
                    </p>
                </div>
                <hr/>

                <p className="wbdv-body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae aliquet velit. Mauris massa quam,
                    rhoncus nec scelerisque a, eleifend at magna. Aenean id pulvinar risus. Sed at ipsum sed odio
                    commodo gravida. Fusce luctus varius massa, ac vestibulum turpis pharetra at. Aenean diam felis,
                    luctus sit amet felis et, dapibus gravida libero. Proin feugiat porttitor orci a imperdiet.
                    Curabitur est lectus, iaculis quis mauris vitae, lobortis maximus magna. Proin efficitur elit ut
                    eros efficitur accumsan. Nullam viverra ullamcorper erat in rhoncus. In volutpat porttitor dictum.
                    Ut nec fringilla orci, id eleifend neque. Proin suscipit imperdiet ex eget volutpat. Nam elementum
                    sem erat, eget lobortis odio fermentum nec.
                </p>
                <div className="wbdv-center-in-div">
                    <button className="btn wbdv-affirmative-btn">
                        VIEW FULL RECIPE
                    </button>
                </div>


            </div>
        </div>
    )

}

export default FeaturedRecipeCard