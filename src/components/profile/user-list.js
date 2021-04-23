import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Collapse} from 'react-bootstrap';

const UserList = ({
                      heading = "Followers",
                      listOfUsers = []
                  }) => {
    const [openCollapse, setOpenCollapse] = useState(false);

    return (
        <div className="background-followers">

            <div className="" onClick={() => setOpenCollapse(!openCollapse)}>
                <h1 className="fill-background"> {heading} </h1>
            </div>
            <Collapse in={openCollapse}>
                <ul>
                    {
                        listOfUsers.map(user => <li><Link to={`/profile/${user.userID}`}>{user.userName}</Link></li>)
                    }
                </ul>
            </Collapse>
        </div>
    )
}

export default UserList;