import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";


const ProfileItems = () => {

    return (
        <div>
            <ul className="list-group">

                <Link to="/about/me">
                    <li className="list-group-item">
                        About Me
                    </li>
                </Link>

                <Link to="/followers">
                    <li className="list-group-item">
                        Followers
                    </li>
                </Link>

                <Link to="/following">
                    <li className="list-group-item">
                        Following
                    </li>
                </Link>

                <Link to="/posted/recipes">
                    <li className="list-group-item">
                        Posted Recipes
                    </li>
                </Link>

                <Link to="/liked/recipes">
                    <li className="list-group-item">
                        Liked Recipes
                    </li>
                </Link>

                <Link to="/edit/profile">
                    <li className="list-group-item">
                        Edit My Profile
                    </li>
                </Link>
            </ul>

        </div>

    )



}

export default ProfileItems;


