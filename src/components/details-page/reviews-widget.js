import WriteAReview from "./write-a-review-form";
import ReviewCard from "./review-card";
import SignUpWidget from "../home-page/sign-up-widget";
import userService from '../../services/users-service'

const ReviewsWidget = () => {
    const currentUser = userService.getCurrentUser()
    return (
            <div className="col-12 wbdv-widget-container wbdv-widget-interior">
                <div className="col-12">
                    <h1 className="h1 wbdv-center-in-div"> Reviews</h1>
                    <hr/>
            </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        {
                            currentUser.userName !== undefined &&
                            <WriteAReview/>
                        }
                        {
                            currentUser.userName === undefined &&
                            <SignUpWidget title={"Sign in to leave a review"}
                                          page={"detail"}/>
                        }
                    </div>
                    <div className="col-12 col-md-8">
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