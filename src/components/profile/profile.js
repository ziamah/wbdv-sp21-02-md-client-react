import React, {useState} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import PrivateData from './private-data';
import './profile.css'
import UserList from './user-list'
import RecipeList from './recipe-list'
import NavigationBar from './navigation-bar'

const Profile = ({userid="superman", following="ab,cd,ef", followers="ab,cd,ef",
                 likes="recipe1,recipe2", recipes="myrecipe1,myrecipe2"}) => {

    const [privatemode, setPrivateMode] = useState(true);
    const [editing, setEditing] = useState(false);


    return(
    <BrowserRouter>
    <div>
        <NavigationBar/>
    </div>

    <div className="background-liked add-margin-top">

            <div className="row container background-liked">

            <div className="col-lg-4 background-liked">

            </div>
            <div className="card col-lg-8 add-padding-pic profile-card2 background-liked profile-card3">

                    <img src="https://i.ibb.co/T8hppc1/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg"
                        className="card-image-top profile-image-size rounded-circle" alt="..."/>


                <div class="card-body profile-image-size col-6">

                    <div><h3 className="card-title color-green profile-bold">MManzur Morshed</h3></div>
                    <div className="color-black review-numbers-font-size">10 reviews!</div>
                    <div className="card-text color-brown">I am a food lover. Like to explore new recipes!</div>

                </div>


            </div>

            <div className="background-liked">

            </div>

            </div>


        <div className="row container">



                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">




                        <UserList users={["user1 profile link", "user2 profile link", "user3 profile link"]} />



                   </div>



                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">

                        <UserList users={["user1 profile link", "user2 profile link", "user3 profile link"]}
                                       heading = "Following" />

                    </div>



                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">



                        <RecipeList recipes={["recipe1 description link", "recipe2 description link",
                        "recipe3 description link"]}
                        heading="My Favorite Recipes"/>


                    </div>



                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">

                        <RecipeList recipes={["recipe1 description link", "recipe2 description link",
                        "recipe3 description link"]}/>

                    </div>

                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">

                        <RecipeList recipes={["recipe1 description link", "recipe2 description link",
                        "recipe3 description link"]}
                        heading="My Reviewed Recipes"/>

                    </div>

                    <div className="h3 add-padding col-xs-12 col-sm-12 col-md-6 col-lg-6">
                         <PrivateData/>
                    </div>





        </div>
    </div>
    </BrowserRouter>
    )
}

export default Profile


