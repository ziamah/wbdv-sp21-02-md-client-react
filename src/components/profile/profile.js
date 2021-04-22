import React, {useState, useEffect} from 'react';
import {BrowserRouter,Link,Route, useParams} from 'react-router-dom';
import PrivateData from './private-data';
import './profile.css'
import UserList from './user-list'
import RecipeList from './recipe-list'
import UserRecipeList from './user-recipe-list'
import userService from "../profile-services/user-service";
import followerService from "../profile-services/follower-service";
import favoriteService from "../profile-services/favorite-service";
import reviewService from "../profile-services/review-service";
import userRecipeService from "../profile-services/userrecipe-service";
import recipeIdRegEx from "./recipe-regex";

const Profile = ({following="ab,cd,ef", followers="ab,cd,ef",
                 likes="recipe1,recipe2", recipes="myrecipe1,myrecipe2"}) => {

    const [privatemode, setPrivateMode] = useState(true);
    const [editing, setEditing] = useState(false);
    const [userName, setUserName] = useState("Manzur")
    const [profileImage, setProfileImage] = useState("https://i.ibb.co/T8hppc1/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg")
    const [userBio, setUserBio] = useState("Food Lover!")
    const [user, setUser] = useState()
    const [userPassword, setUserPassword] = useState("123")
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
    const [curUser, setCurUser] = useState(6);
    const [followerObjectLoggedIn, setFollowerObjectLoggedIn] = useState();
    const [alreadyFollowing, setAlreadyFollowing] = useState(false);
    const [totalReviews, setTotalReviews] = useState(0);
    console.log({userId});

    const addFollower = () => {
        //console.log(userFollowed)
        //if(typeof  userFollowed==='undefined') {
        //    console.log("inside")
        //    setUserFollowed([-1])
        //    console.log(userFollowed)
        //}
        //console.log(userFollowed)
        //followerService.findFollowerById(userId)
        //.then(object => {
        //    console.log(object)
        //    if (object==undefined) {
        //        followerService.createFollower({userID:{userId},userFollowing:[],userFollowed:[]})
        //    }
        //})
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
            .then(setUserFollowed(followerObject.userFollowed))
            .then(setAlreadyFollowing(false))

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
        userService.findUserById(userId)
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

        followerService.findFollowerById(curUser)
                    .then(user =>  {
                                    setFollowerObjectLoggedIn(user);

                                    })
        favoriteService.findFavoritesObjectByUserId(userId)
                        .then(recipes => {
                            //setFavoriteRecipeId(recipes)
                            recipes.map(eachRecipe => setFavoriteRecipeId(favoriteRecipeId =>
                            [...favoriteRecipeId,[eachRecipe.recipeID,eachRecipe.recipeName]]))
                        })

        reviewService.findReviewsByUserId(userId)
                                .then(recipes => {
                                    //setReviewRecipeId(recipes)
                                    setTotalReviews(recipes.length)
                                    recipes.map(eachRecipe => setReviewRecipeId(reviewRecipeId =>
                                    [...reviewRecipeId,[eachRecipe.recipeID,eachRecipe.recipeName]]))
                                })

        userRecipeService.findUserRecipesByUserId(userId)
                                        .then(recipes => {
                                            setUserRecipes(recipes)
                                })


        }, [userId])


        useEffect(() => {

            userService.findUserListById(userFollowed)
                        .then(users => {
                                          setFollowerUsers(users)
                                       })
            userService.findUserListById(userFollowing)
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


        useEffect(() => {
            setFavoriteRecipeIdType([])
            favoriteRecipeId.map(eachId => setFavoriteRecipeIdType(favoriteRecipeIdType =>
            {
            if (recipeIdRegEx.test(eachId[0])) {
            return [...favoriteRecipeIdType,[eachId[0], `/details/${eachId[0]}`,eachId[1]]]
            }
            else {
                return [...favoriteRecipeIdType,[eachId[0], `/details/${eachId[0]}`,eachId[1]]]
            }
            }))

        }, [favoriteRecipeId])

        useEffect(() => {
             setReviewRecipeIdType([])
             reviewRecipeId.map(eachId => setReviewRecipeIdType(reviewRecipeIdType =>
             {
             if (recipeIdRegEx.test(eachId[0])) {
             return[...reviewRecipeIdType,[eachId[0], `/details/${eachId[0]}`,eachId[1]]]
                    }
             else {
                console.log(eachId[0])
                return[...reviewRecipeIdType,[eachId[0], `/details/${eachId[0]}`,eachId[1]]]
             }
             }))

        }, [reviewRecipeId])


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


    return(
    <div>
    {/*<Route path="/profile/user/:userId" exact={true}>*/}
    <div>
        {/*<NavigationBar/>*/}
    </div>

    <div className="background-liked add-margin-top">

            <div className="row container background-liked">

            <div className="col-lg-4 background-liked">

            </div>
            <div className="card col-lg-8 add-padding-pic profile-card2 background-liked profile-card3">

                    <img src={profileImage}
                        className="card-image-top profile-image-size rounded-circle" alt="..."/>

                {/*<h5 className="text-color-following">Following</h5>*/}
                <div class="card-body profile-image-size col-6">

                    <div><h3 className="card-title color-green profile-bold">{userName}</h3></div>
                    <div className="color-black review-numbers-font-size">{totalReviews} reviews!</div>
                    <div className="card-text color-brown">{userBio}</div>
                    <br/>
                    <div>
                        {!alreadyFollowing && curUser!=userId &&
                        <i type="button" className="btn btn-success" onClick={() => addFollower()}>
                            Follow Me
                        </i>
                        }
                        {alreadyFollowing && curUser!=userId &&

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
                        "recipe3 description link"]} favId={favoriteRecipeIdType}
                        heading="My Favorite Recipes"/>


                    </div>



                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">

                        <UserRecipeList recipes={["recipe1 description link", "recipe2 description link",
                        "recipe3 description link"]} myRecipes={userRecipes}/>

                    </div>

                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">

                        <RecipeList recipes={["recipe1 description link", "recipe2 description link",
                        "recipe3 description link"]}  favId={reviewRecipeIdType}
                        heading="My Reviewed Recipes"/>

                    </div>

                    { curUser == userId &&
                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                         <PrivateData userName = {userName}
                                      setUserName = {setUserName}
                                      updateUser = {userService.updateUser}
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
    {/*</Route>*/}
    </div>
    )
}

export default Profile


