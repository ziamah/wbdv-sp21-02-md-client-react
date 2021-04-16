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
    const [folllowerUsers, setFollowerUsers] = useState([]);
    const [folllowedUsers, setFollowedUsers] = useState([]);
    const [favoriteRecipeId, setFavoriteRecipeId] = useState([]);
    const [reviewRecipeId, setReviewRecipeId] = useState([]);
    const [userRecipes, setUserRecipes] = useState([]);
    const [favoriteRecipeIdType, setFavoriteRecipeIdType] = useState([]);
    const [reviewRecipeIdType, setReviewRecipeIdType] = useState([]);
    console.log({userId});

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
                                    setUserFollowing(user.userFollowing);
                                    setUserFollowed(user.userFollowed);
                                    })

        favoriteService.findFavoritesByUserId(userId)
                        .then(recipes => {
                            setFavoriteRecipeId(recipes)
                        })

        reviewService.findReviewsByUserId(userId)
                                .then(recipes => {
                                    //setReviewRecipeId(recipes)
                                    recipes.map(eachRecipe => setReviewRecipeId(reviewRecipeId => [...reviewRecipeId,eachRecipe.recipeID]))
                                })

        userRecipeService.findUserRecipesByUserId(userId)
                                        .then(recipes => {
                                            setUserRecipes(recipes)
                                })


        }, [userId])


        useEffect(() => {

            userService.findUserListById(userFollowing)
                        .then(users => {
                                          setFollowerUsers(users)
                                       })
            userService.findUserListById(userFollowed)
                                    .then(users => {
                                                      setFollowedUsers(users)
                                                   })


        }, [userFollowing, userFollowed])


        useEffect(() => {

            favoriteRecipeId.map(eachId => setFavoriteRecipeIdType(favoriteRecipeIdType =>
            {
            if (recipeIdRegEx.test(eachId)) {
            return [...favoriteRecipeIdType,[eachId, '/userrecipe']]
            }
            else {
                return [...favoriteRecipeIdType,[eachId, '/apirecipe']]
            }
            }))

        }, [favoriteRecipeId])

        useEffect(() => {
             setReviewRecipeIdType([])
             reviewRecipeId.map(eachId => setReviewRecipeIdType(reviewRecipeIdType =>
             {
             if (recipeIdRegEx.test(eachId)) {
             return[...reviewRecipeIdType,[eachId, '/userrecipe']]
                    }
             else {
                console.log(eachId)
                return[...reviewRecipeIdType,[eachId, '/apirecipe']]
             }
             }))

        }, [reviewRecipeId])


    console.log(userName)
    console.log(profileImage)
    console.log(userBio)
    console.log(userPassword)
    console.log(userFollowing)
    console.log(userFollowed)
    console.log(favoriteRecipeId)
    console.log(reviewRecipeId)
    console.log(userRecipes)
    //console.log(favoriteRecipeId[1])
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


                <div class="card-body profile-image-size col-6">

                    <div><h3 className="card-title color-green profile-bold">{userName}</h3></div>
                    <div className="color-black review-numbers-font-size">10 reviews!</div>
                    <div className="card-text color-brown">{userBio}</div>

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





        </div>
    </div>
    {/*</Route>*/}
    </div>
    )
}

export default Profile


