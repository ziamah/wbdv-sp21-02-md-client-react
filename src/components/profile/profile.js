import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import PrivateData from './private-data';
import './profile.css'
import UserList from './user-list'
import RecipeList from './recipe-list'
import RecipeListReview from './recipe-list-review'
import UserRecipeList from './user-recipe-list'
import profileUserService from "../profile-services/user-service";
import followerService from "../profile-services/follower-service";
import favoriteService from "../profile-services/favorite-service";
import reviewService from "../profile-services/review-service";
import userRecipeService from "../profile-services/userrecipe-service";
import mainUserService from '../../services/users-service'

const Profile = ({following="ab,cd,ef", followers="ab,cd,ef",
                     likes="recipe1,recipe2", recipes="myrecipe1,myrecipe2"}) => {

    const [privatemode, setPrivateMode] = useState(true);
    const [editing, setEditing] = useState(false);
    const [userName, setUserName] = useState("")
    //const [profileImage, setProfileImage] = useState("https://i.ibb.co/T8hppc1/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg")
    const [profileImage, setProfileImage] = useState("")
    //const [userBio, setUserBio] = useState("Food Lover!")
    const [userBio, setUserBio] = useState("")
    const [user, setUser] = useState()
    //const [userPassword, setUserPassword] = useState("123")
    const [userPassword, setUserPassword] = useState("")
    const [userFollowing, setUserFollowing] = useState([-1])
    const [userFollowed, setUserFollowed] = useState([-1])
    const {userId} = useParams();
    const [followerObject, setFollowerObject] = useState();
    const [folllowerUsers, setFollowerUsers] = useState([]);
    const [folllowedUsers, setFollowedUsers] = useState([]);
    const [favoriteRecipeId, setFavoriteRecipeId] = useState([]);
    const [reviewRecipeId, setReviewRecipeId] = useState([]);
    const [userRecipes, setUserRecipes] = useState([]);
    const [favoriteRecipeIdType, setFavoriteRecipeIdType] = useState([]);
    const [reviewRecipeIdType, setReviewRecipeIdType] = useState([]);
    const [curUser, setCurUser] = useState(undefined);

    const [followerObjectLoggedIn, setFollowerObjectLoggedIn] = useState();
    const [alreadyFollowing, setAlreadyFollowing] = useState(false);
    const [totalReviews, setTotalReviews] = useState(0);
    console.log({userId});

    const addFollower = () => {

        followerService.updateFollower(userId,{...followerObject, userFollowed:[...userFollowed || [],curUser]})
            .then(setUserFollowed([...userFollowed || [],curUser]))

        followerService.updateFollower(curUser,{...followerObjectLoggedIn,
            userFollowing:[...followerObjectLoggedIn.userFollowing || [],userId]})
    }

    const removeFollower = () => {
        followerService.updateFollower(userId,{...followerObject, userFollowed:userFollowed
                .filter(eachUser => {
                    if(eachUser==curUser) {
                        return false;
                    }
                    else {
                        return true;
                    }
                })})
            .then((followers) => setUserFollowed(followers.userFollowed))
            .then(() => setAlreadyFollowing(false))

        followerService.updateFollower(curUser,{...followerObjectLoggedIn,
            userFollowing:followerObjectLoggedIn.userFollowing
                .filter(eachUser => {
                    if(eachUser==userId) {
                        return false;
                    }
                    else {
                        return true;
                    }
                })})


    }

    useEffect(() => {

        mainUserService.getCurrentUser()
                    .then((user) => {
                        if (user !== null) {
                            setCurUser(user.userID)

                            followerService.findFollowerById(user.userID)
                                        .then(user =>  {
                                            setFollowerObjectLoggedIn(user);

                                        })

                        }
                    })
        profileUserService.findUserById(userId)
            .then(user => {
                setUserName(user.userName);
                setProfileImage(user.userPicUrl);
                setUserBio(user.userBio);
                setUser(user);
                setUserPassword(user.userPW);

            })

        followerService.findFollowerById(userId)
            .then(user =>  {
                setFollowerObject(user);
                setUserFollowing(user.userFollowing);
                setUserFollowed(user.userFollowed);
            })


        favoriteService.findFavoritesObjectByUserId(userId)
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


    }, [userId])


    useEffect(() => {

        profileUserService.findUserListById(userFollowed)
            .then(users => {
                setFollowerUsers(users)
            })
        profileUserService.findUserListById(userFollowing)
            .then(users => {
                setFollowedUsers(users)
            })
        if (userFollowed!= undefined) {
            userFollowed.map(eachId => {
                if (eachId == curUser) {
                    setAlreadyFollowing(true)
                }
            })
        }

    }, [userFollowing, userFollowed])


    console.log(userName)
    console.log(profileImage)
    console.log(userBio)
    console.log(userPassword)
    console.log(followerObject)
    console.log(userFollowing)
    console.log(userFollowed)
    console.log(favoriteRecipeId)
    console.log(reviewRecipeId)
    console.log(userRecipes)
    //console.log(favoriteRecipeId)
    //console.log(recipeIdRegEx.test(favoriteRecipeId[1]))
    console.log(favoriteRecipeIdType)
    console.log(reviewRecipeIdType)
    console.log(curUser)


    return(
        <div>
            <div>
            </div>

            <div className="background-liked add-margin-top">

                <div className="row container background-liked">

                    <div className="col-lg-4 background-liked">

                    </div>
                    <div className="card col-lg-8 add-padding-pic profile-card2 background-liked profile-card3">

                        <img src={profileImage}
                             className="card-image-top profile-image-size rounded-circle" alt="..."/>


                        <div class="card-body profile-image-size col-6">

                            <div><h3 className="card-title color-green profile-bold">{userName}</h3></div>
                            <div className="color-black review-numbers-font-size">{totalReviews} reviews!</div>
                            <div className="card-text color-brown">{userBio}</div>
                            <br/>
                            <div>
                                {!alreadyFollowing && curUser!=userId && curUser!=undefined &&
                                <i type="button" className="btn btn-success" onClick={() => addFollower()}>
                                    Follow Me
                                </i>
                                }
                                {alreadyFollowing && curUser!=userId && curUser!=undefined &&

                                <i type="button" className="btn btn-success" onClick={() => removeFollower()}>
                                    UnFollow Me
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



                        {folllowerUsers.length != undefined &&
                        <UserList users={["user1 profile link", "user2 profile link", "user3 profile link"]}
                                  listOfID={userFollowing} listOfUsers={folllowerUsers}/>

                        }

                    </div>



                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">

                        {folllowedUsers.length != undefined &&
                        <UserList users={["user1 profile link", "user2 profile link", "user3 profile link"]}
                                  heading = "Following" listOfID={userFollowed}  listOfUsers={folllowedUsers}/>
                        }
                    </div>



                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">



                        <RecipeList recipes={["recipe1 description link", "recipe2 description link",
                            "recipe3 description link"]} favId={favoriteRecipeId}
                                    heading="My Favorite Recipes"/>


                    </div>



                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">

                        <UserRecipeList recipes={["recipe1 description link", "recipe2 description link",
                            "recipe3 description link"]} myRecipes={userRecipes}/>

                    </div>

                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">

                        <RecipeListReview recipes={["recipe1 description link", "recipe2 description link",
                            "recipe3 description link"]}  favId={reviewRecipeId}
                                          heading="My Reviewed Recipes"/>

                    </div>

                    { curUser == userId &&
                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <PrivateData userName = {userName}
                                     setUserName = {setUserName}
                                     updateUser = {profileUserService.updateUser}
                                     userId = {userId}
                                     userBio = {userBio}
                                     setUserBio = {setUserBio}
                                     userPassword = {userPassword}
                                     setUserPassword = {setUserPassword}
                                     profileImage = {profileImage}
                                     setProfileImage = {setProfileImage}
                                     user = {user}
                        />
                    </div>
                    }





                </div>
            </div>
        </div>
    )
}

export default Profile


