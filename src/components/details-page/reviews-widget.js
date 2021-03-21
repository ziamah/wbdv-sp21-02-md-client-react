import WriteAReview from "./write-a-review-form";
import ReviewCard from "./review-card";

const ReviewsWidget = () => {
    return (
            <div className="col-12 wbdv-widget-container wbdv-widget-interior">
                <div className="col-12">
                    <h1 className="h1 wbdv-center-in-div"> Reviews</h1>
                    <hr/>
            </div>
                <div className="row">
                    <div className="col-4">
                        <WriteAReview/>
                    </div>
                    <div className="col-8">
                        {/*TODO: Map reviews to reviewCards*/}
                        <ReviewCard/>
                        <ReviewCard/>
                        <ReviewCard/>
                    </div>
                </div>
            </div>
        )
    }

export default ReviewsWidget