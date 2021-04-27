import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import reviewService from "../../services/review-service";
import usersService from "../../services/users-service";

const ReviewCard = ({
                        user,
                        recipid,
                        rating,
                        reviewText,
                        reviewer,
                        userID,
                        recipeName
                    }) => {
    const {id} = useParams()
    const {username, setUsername} = useState(undefined);
    const numStars = Number(rating)
    const stars = new Array(numStars).fill(null);
    // useEffect(() => {
    //     usersService.findUserById(reviewer)
    //         .then((user) => {
    //             setUser(user)
    //         })
    // }, [])
    return (
        <div className="wbdv-review-card wbdv-widget-interior">
            <div className="row">
                <div className="col-1">
                    {/*TODO: Profile image goes here -- if none, display default image*/}
                    {/*<img className="d-block w-100 wbdv-padded-img"*/}
                    {/*     src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"*/}
                    {/*     alt=""></img>*/}
                </div>
                <div className="col-11">
                    <div className="row">
                        <h3 className="h3 wbdv-padded-img">
                            {/*TODO: Fill in content programmatically*/}
                            <Link to={`/profile/${userID}`}>
                                 {reviewer}
                            </Link>
                            <div className="wbdv-padded-icon float-right">
                                {stars.map((star, idx) => <i className="fas fa-star" key = {idx}></i>)}
                                {/*<i className="fas fa-star"></i>*/}
                                {/*<i className="fas fa-star"></i>*/}
                                {/*<i className="fas fa-star"></i>*/}
                                {/*<i className="fas fa-star"></i>*/}
                                {/*<i className="fas fa-star-half"></i>*/}
                            </div>
                        </h3>
                    </div>
                    {/*TODO: Link to profile page*/}
                    <div className="wbdv-link-text">
                        {/*    TODO: Fill username programmatically*/}
                        {/*<Link to={`/profile/${userID}`}>*/}
                        {/*    username: {reviewer}*/}
                        {/*</Link>*/}
                    </div>
                    <div className="row wbdv-widget-interior">
                        {reviewText}
                        {/*Review text Camembert de normandie chalk and cheese fromage frais.*/}
                        {/*Edam mozzarella cream cheese lancashire dolcelatte the big cheese gouda*/}
                        {/*roquefort.*/}
                        {/*Cheesy feet mascarpone dolcelatte fondue bavarian bergkase lancashire*/}
                        {/*dolcelatte*/}
                        {/*cheesecake.*/}
                    </div>
                </div>

            </div>

        </div>

    )
}
export default ReviewCard