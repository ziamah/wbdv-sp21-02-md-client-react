import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";

const UserList = ({users = []}) => {

    return (
        <ul>
        {
            users.map(user => <li>user</li>)
        }
        </ul>


    )

}

export default UserList;