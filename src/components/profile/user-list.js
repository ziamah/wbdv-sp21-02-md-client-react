import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";

const UserList = ({users = [], heading = "My Followers"}) => {

    return (
        <>
        <h1 className="profile-items-border"> {heading} </h1>

        <ul className="">
        {
            users.map(user => <li>{user}</li>)
        }
        </ul>
        </>


    )

}

export default UserList;