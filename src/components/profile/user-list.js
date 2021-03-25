import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";

const UserList = ({users = [], heading = "My Followers"}) => {

    return (
        <div className="background-followers">
        <h1 className="fill-background"> {heading} </h1>

        <ul className="">
        {
            users.map(user => <li>{user}</li>)
        }
        </ul>
        </div>


    )

}

export default UserList;