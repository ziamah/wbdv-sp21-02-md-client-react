const ReviewCard = ({user}) => {
    return (
        <div className="wbdv-review-card wbdv-widget-interior">
            <div className="row">
                <div className="col-1">
                    {/*TODO: Profile image goes here -- if none, display default image*/}
                    <img className="d-block w-100 wbdv-padded-img"
                         src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                         alt="default profile picture"></img>
                </div>
                <div className="col-11">
                    <div className="row">
                        <h3 className="h3 wbdv-padded-img">
                            {/*TODO: Fill in content programmatically*/}
                            Review Title
                            <div className="wbdv-padded-icon float-right">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </h3>
                    </div>
                    {/*TODO: Link to profile page*/}
                    <div className="wbdv-link-text">
                        {/*    TODO: Fill username programmatically*/}
                        username
                    </div>
                    <div className="row wbdv-widget-interior">
                        Review text Camembert de normandie chalk and cheese fromage frais.
                        Edam mozzarella cream cheese lancashire dolcelatte the big cheese gouda roquefort.
                        Cheesy feet mascarpone dolcelatte fondue bavarian bergkase lancashire dolcelatte
                        cheesecake.
                    </div>
                </div>

            </div>

        </div>

    )
}
export default ReviewCard