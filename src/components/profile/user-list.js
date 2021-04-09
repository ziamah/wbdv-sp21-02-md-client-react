import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";
import {Button, Collapse} from 'react-bootstrap';
import userService from "../profile-services/user-service";

const UserList = ({users = [], usersId = [], heading = "Followers"}) => {
const [openCollapse, setOpenCollapse] = useState(false);
    return (
        <div className="background-followers">

            <div className="" onClick={() => setOpenCollapse(!openCollapse)}>
                  <h1 className="fill-background"> {heading} </h1>
            </div>

            <Collapse in={openCollapse}>

                  <ul>
                       {
                           usersId.map(user => <li><Link to={`/profile/user/${user}`}>{user}</Link></li>)
                       }

                  </ul>
            </Collapse>

        </div>


    )

}

export default UserList;