import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import PrivateData from './private-data';
import './profile.css'
import UserList from './user-list'
import RecipeList from './recipe-list'
import RecipeListReview from './recipe-list-review'
import UserRecipeList from './user-recipe-list'
import profileUserService from "../profile-services/user-service";
import followerService from "../../services/follower-service";
import favoriteService from "../../services/favorites-service";
import reviewService from "../../services/review-service";
import userRecipeService from "../../services/userrecipe-service";
import mainUserService from '../../services/users-service'

const Profile = () => {

    const [userName, setUserName] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [userBio, setUserBio] = useState("")
    const [user, setUser] = useState()
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userFollowing, setUserFollowing] = useState([-1])
    const [userFollowed, setUserFollowed] = useState([-1])
    const {userId} = useParams();
    const [followerObject, setFollowerObject] = useState();
    const [followerUsers, setFollowerUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState([]);
    const [favoriteRecipeId, setFavoriteRecipeId] = useState([]);
    const [reviewRecipeId, setReviewRecipeId] = useState([]);
    const [userRecipes, setUserRecipes] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);

    const [followerObjectLoggedIn, setFollowerObjectLoggedIn] = useState();
    const [alreadyFollowing, setAlreadyFollowing] = useState(false);
    const [totalReviews, setTotalReviews] = useState(0);

    const addFollower = () => {
        followerService.updateFollower(userId, {...followerObject, userFollowed: [...userFollowed || [], currentUser]})
            .then(setUserFollowed([...userFollowed || [], currentUser]))
        followerService.updateFollower(currentUser, {
            ...followerObjectLoggedIn,
            userFollowing: [...followerObjectLoggedIn.userFollowing || [], userId]
        })
    }

    const removeFollower = () => {
        followerService.updateFollower(userId, {
            ...followerObject, userFollowed: userFollowed
                .filter(eachUser => {
                    return eachUser !== currentUser;
                })
        })
            .then((followers) => setUserFollowed(followers.userFollowed))
            .then(() => setAlreadyFollowing(false))

        followerService.updateFollower(currentUser, {
            ...followerObjectLoggedIn,
            userFollowing: followerObjectLoggedIn.userFollowing
                .filter(eachUser => {
                    return eachUser !== userId;
                })
        })


    }

    useEffect(() => {

        mainUserService.getCurrentUser()
            .then((user) => {
                if (user !== null) {
                    setCurrentUser(user.userID.toString())

                    followerService.findFollowerById(user.userID)
                        .then(user => {
                            setFollowerObjectLoggedIn(user);

                        })

                }
            })
        profileUserService.findUserById(userId)
            .then(user => {
                setUserName(user.userName);
                setProfileImage(user.userPicUrl);
                setUserBio(user.userBio);
                setUserEmail(user.userEmail)
                setUser(user);
                setUserPassword(user.userPW);

            })

        followerService.findFollowerById(userId)
            .then(user => {
                setFollowerObject(user);
                setUserFollowing(user.userFollowing);
                setUserFollowed(user.userFollowed);
            })


        favoriteService.findFavoritesByUser(parseInt(userId))
            .then(recipes => {
                setFavoriteRecipeId(recipes)

            })

        reviewService.findReviewsByUserId(userId)
            .then(recipes => {
                setReviewRecipeId(recipes)
                setTotalReviews(recipes.length)

            })

        userRecipeService.findUserRecipesByUserId(userId)
            .then(recipes => {
                setUserRecipes(recipes)
            })
        profileUserService.findUserListById(userFollowed)
            .then(users => {
                setFollowerUsers(users)
            })
        profileUserService.findUserListById(userFollowing)
            .then(users => {
                setFollowedUsers(users)
            })
        if (userFollowed !== undefined) {
            userFollowed.map(eachId => {
                if (eachId === currentUser) {
                    setAlreadyFollowing(true)
                }
            })
        }
    }, [currentUser, userFollowed, userFollowing, userId])

    return (
        <div>
            <div>
            </div>
            <div className="background-liked add-margin-top">
                <div className="row container background-liked">
                    <div className="col-lg-4 background-liked">
                    </div>
                    <div className="card col-lg-8 add-padding-pic profile-card2 background-liked profile-card3">
                        <img src={profileImage}
                             className="card-image-top profile-image-size rounded-circle" alt=""/>
                        <div className="card-body profile-image-size col-6">
                            <div>
                                <h3 className="card-title color-green profile-bold">{userName}</h3></div>
                            <div className="color-black review-numbers-font-size">{totalReviews} reviews!</div>
                            <div className="card-text color-brown">{userBio}</div>
                            <br/>
                            <div>
                                {!alreadyFollowing && currentUser !== userId && currentUser !== undefined &&
                                <i className="btn btn-success" onClick={() => addFollower()}>
                                    Follow
                                </i>
                                }
                                {alreadyFollowing && currentUser !== userId && currentUser !== undefined &&
                                <i className="btn btn-success" onClick={() => removeFollower()}>
                                    Unfollow
                                </i>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="background-liked">
                    </div>
                </div>
                <div className="row container">
                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        {followerUsers.length !== undefined &&
                        <UserList users={["user1 profile link", "user2 profile link", "user3 profile link"]}
                                  listOfID={userFollowing} listOfUsers={followerUsers}/>
                        }
                    </div>
                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        {followedUsers.length !== undefined &&
                        <UserList users={["user1 profile link", "user2 profile link", "user3 profile link"]}
                                  heading="Following" listOfID={userFollowed} listOfUsers={followedUsers}/>
                        }
                    </div>
                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        {favoriteRecipeId.length !== 0 &&
                        <RecipeList recipes={["recipe1 description link", "recipe2 description link",
                            "recipe3 description link"]} favId={favoriteRecipeId}
                                    heading="My Favorite Recipes"/>
                        }
                        {favoriteRecipeId.length === 0 &&
                        <h3 className="fill-background">No Favorites Recipes</h3>

                        }
                    </div>
                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        {userRecipes.length !== 0 &&
                        <UserRecipeList recipes={["recipe1 description link", "recipe2 description link",
                            "recipe3 description link"]} myRecipes={userRecipes}/>
                        }
                    </div>
                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        {reviewRecipeId.length !== 0 &&
                        <RecipeListReview recipes={["recipe1 description link", "recipe2 description link",
                            "recipe3 description link"]} favId={reviewRecipeId}
                                          heading="My Reviewed Recipes"/>
                        }
                        {reviewRecipeId.length === 0 &&
                        <h3 className="fill-background">No Reviewed Recipes</h3>
                        }
                    </div>
                    {currentUser === userId &&
                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <PrivateData userName={userName}
                                     setUserName={setUserName}
                                     updateUser={profileUserService.updateUser}
                                     userId={userId}
                                     userBio={userBio}
                                     setUserBio={setUserBio}
                                     userPassword={userPassword}
                                     setUserPassword={setUserPassword}
                                     profileImage={profileImage}
                                     setProfileImage={setProfileImage}
                                     userEmail={userEmail}
                                     setUserEmail={setUserEmail}
                                     user={user}
                        />
                    </div>
                    }
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Profile


