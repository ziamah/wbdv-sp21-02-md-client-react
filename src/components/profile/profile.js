import React, {useState} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import PrivateData from './private-data';
//import ProfileItems from './profile-items';
import './profile.css'
import AboutMe from './about-me'
import UserList from './user-list'
import RecipeList from './recipe-list'

const Profile = ({userid="superman", following="ab,cd,ef", followers="ab,cd,ef",
                 likes="recipe1,recipe2", recipes="myrecipe1,myrecipe2"}) => {

    const [privatemode, setPrivateMode] = useState(true);
    const [editing, setEditing] = useState(false);

    return(
    <BrowserRouter>
    <div className="background-liked">

            <div className="row container background-liked">

            <div className="col-lg-5 background-liked">

            </div>
            <div className="card col-lg-4 profile-card2 background-liked">

                    <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                        className="card-image-top" alt="..."/>


                <div class="card-body card-body-color">
                    <h3 className="card-title color-green">MManzur Morshed<br/><small className="color-blue">10 reviews!</small></h3>

                    <p className="card-text">I am a food lover. Like to explore different recipes!</p>

                  </div>


            </div>

            <div className="col-lg-3 background-liked">

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

            <div className="h2 background-followers">

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


