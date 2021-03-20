import React, {useState} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import PrivateData from './private-data';
import ProfileItems from './profile-items';
import './profile.css'
import AboutMe from './about-me'

const Profile = ({userid="superman", following="ab,cd,ef", followers="ab,cd,ef",
                 likes="recipe1,recipe2", recipes="myrecipe1,myrecipe2"}) => {

    const [privatemode, setPrivateMode] = useState(true);
    const [editing, setEditing] = useState(false);

    return(
    <BrowserRouter>
    <div className="container">
        {/*<div className="">*/}
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
              className="profile-image-position" alt="..."/>


        {/*</div>*/}

        <div>

          <h1 className="heading-position">MManzur Morshed</h1>

        </div>

        <Route path="/about/me">
        <div className="body-position">
            <AboutMe/>


        </div>

        </Route>

        <br/>

        <br/>
        <br/>




        <div className="items-position">
            <ProfileItems/>
        </div>
    </div>
    </BrowserRouter>
    )
}

export default Profile


