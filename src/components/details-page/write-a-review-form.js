import {Link} from "react-router-dom";

const WriteAReview = () => {
    return (
        <div className="wbdv-widget-container-light">
            <div className="wbdv-contrast-header">
                <h3 className="wbdv-center-in-div">
                    Write a review
                </h3>
            </div>
            <div className="wbdv-widget-interior">
                <label for="star-rating-select"  className="wbdv-padded-icon">
                    Choose a rating:
                </label>
                <select id="star-rating-select">
                    <option value="1">&#9733;</option>
                    <option value="2">&#9733; &#9733;</option>
                    <option value="3">&#9733; &#9733; &#9733;</option>
                    <option value="4">&#9733; &#9733; &#9733; &#9733;</option>
                    <option value="5">&#9733; &#9733; &#9733; &#9733; &#9733;</option>
                </select>
            </div>
            <div className="wbdv-widget-interior">
                <textarea className="col-12" placeholder="Write your review here."></textarea>
            </div>
            <div className="row wbdv-center-in-div">
                {/*TODO: Enable button to post new review to the server*/}
                <Link to={"#"}>
                    <button className="btn wbdv-affirmative-btn">
                        POST
                    </button>
                </Link>
            </div>
            <br/>
        </div>
    )
}
export default WriteAReview