import React, {useState} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import PrivateData from './private-data';
//import ProfileItems from './profile-items';
import './profile.css'
import AboutMe from './about-me'
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
    <div className="fixed-top">
                  <i className="fa fa-plus fa-2x color-me-tomato float-right"></i>
    </div>
    <div className="background-liked add-margin-top">

            <div className="row container background-liked">

            <div className="col-lg-4 background-liked">

            </div>
            <div className="card col-lg-8 profile-card2 background-liked profile-card3">

                    <img src="https://i.ibb.co/T8hppc1/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg"
                        className="card-image-top profile-image-size" alt="..."/>


                <div class="card-body profile-image-size">
                    <h3 className="card-title color-green profile-italic">MManzur Morshed<br/><small className="color-black">10 reviews!</small></h3>

                    <p className="card-text color-red col-lg-7">I am a food lover. Like to explore different recipes!</p>

                </div>


            </div>

            <div className="background-liked">

            </div>

            </div>


        {/*<div className="line">
        </div>*/}

        <div className="row container background-liked">

        <div className="col-lg-3 background-liked">

        </div>

        <div className="col-lg-9 background-liked">


            <div className="h2 background-followers">
             <RecipeList recipes={["recipe1 description link", "recipe2 description link", "recipe3 description link"]}
             heading="My Favorite Recipes"/>
            </div>



            <div className="h1 background-followers">

              <UserList users={["user1 profile link", "user2 profile link", "user3 profile link"]} />

            </div>

            <div className="h3 background-followers">

               <UserList users={["user1 profile link", "user2 profile link", "user3 profile link"]}
                                heading = "Following" />

            </div>



            <div className="h1 background-followers">

               <RecipeList recipes={["recipe1 description link", "recipe2 description link", "recipe3 description link"]}/>

            </div>


            <div className="h3 background-followers">
               <PrivateData/>
            </div>

        </div>

        </div>






























        {/*<div className="items-position">
            <ProfileItems/>
        </div>*/}
    </div>
    </BrowserRouter>
    )
}

export default Profile


