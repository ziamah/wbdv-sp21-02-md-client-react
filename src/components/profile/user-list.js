import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";
import {Button, Collapse} from 'react-bootstrap';

const UserList = ({users = [], users2 = ["user4 profile link", "user5 profile link", "user6 profile link"],
heading = "Followers", listOfID=[]}) => {
const [openCollapse, setOpenCollapse] = useState(false);
    return (
        <div className="background-followers">

            <div className="" onClick={() => setOpenCollapse(!openCollapse)}>
                  <h1 className="fill-background"> {heading} </h1>
            </div>

            <Collapse in={openCollapse}>

                  <ul>
                       {
                           listOfID.map(user => <li><Link to={`/profile/user/${user}`}>{user}</Link></li>)
                       }

                  </ul>
            </Collapse>

        </div>


    )

}

export default UserList;