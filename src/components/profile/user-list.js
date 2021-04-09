import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {useParams, Link} from "react-router-dom";
import {Button, Collapse} from 'react-bootstrap';

import userService from "../profile-services/user-service";


const UserList = ({users = [], users2 = ["user4 profile link", "user5 profile link", "user6 profile link"],
heading = "Followers", listOfID=[], listOfUsers=[]}) => {
const [openCollapse, setOpenCollapse] = useState(false);

const [userObjects, setUserObjects] = useState([]);
/*const findName = ({id}) => {

    userService.findUserById(id)
                        .then(user => {
                            setUserObjects((prevList) => [...prevList,user])


                        })


}*/



listOfID.map(user => () => console.log(user))
//listOfID.map(user =>  findName(user))
console.log(userObjects)
//findName(1)




    return (
        <div className="background-followers">

            <div className="" onClick={() => setOpenCollapse(!openCollapse)}>
                  <h1 className="fill-background"> {heading} </h1>
            </div>

            <Collapse in={openCollapse}>


                  <ul>
                        {
                           //listOfID.map(user => <li><Link to={`/profile/user/${user}`}>{user}</Link></li>)
                             listOfUsers.map(user => <li><Link to={`/profile/user/${user.userID}`}>{user.userName}</Link></li>)
                       }

                  </ul>

            </Collapse>

        </div>


    )

}

export default UserList;