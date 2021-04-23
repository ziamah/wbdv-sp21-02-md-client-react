import React, {useState} from 'react';

const PrivateData = ({
                         userName, setUserName,
                         userPassword, setUserPassword,
                         updateUser, userId, user,
                         userBio, setUserBio,
                         profileImage, setProfileImage,
                         userEmail
                     }) => {
    const [editing, setEditing] = useState(false);

    return (
        <div className="background-followers container">
            <div className="row fill-background">
                <div>
                    <h1 className="fill-background"> Private Section </h1>
                </div>
                <div className="add-margin-left-45px">
                    {!editing &&
                    <span className="">
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                    </span>
                    }
                    {editing &&
                    <i onClick={() => {
                        setEditing(false);
                        console.log(userEmail);
                        updateUser(userId, {
                            ...user, userName: userName, userPW: userPassword, userBio: userBio,
                            userPicUrl: profileImage, userEmail: userEmail
                        });
                    }} className="fas fa-check"></i>
                    }
                </div>
            </div>

            <div className="container">
                <div className="form-group row">
                    <div className="col-5">
                        <label htmlFor="name" className="">
                            Name
                        </label>
                    </div>
                    {editing &&
                    <div id="name" className="col-7">
                        <input className="form-control" onChange={(event) => setUserName(event.target.value)}
                               value={userName}/>
                    </div>
                    }
                    {!editing &&
                    <div id="name" className="col-7">
                        {userName}
                    </div>
                    }
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="">
                        Email
                    </label>
                    <div id="email" className="col-7">
                        {userEmail}
                    </div>
                </div>
                {editing &&
                <>
                    <div className="form-group row">
                        <div className="col-5">
                            <label htmlFor="password" className="">
                                Password
                            </label>
                        </div>
                        <div id="password" className="col-7">

                            <input className="form-control" onChange={(event) => {
                                setUserPassword(event.target.value);
                            }}
                                   value={userPassword} type="password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-5">
                            <label htmlFor="bio" className="">
                                Bio
                            </label>
                        </div>
                        <div id="bio" className="col-7">

                            <input className="form-control" onChange={(event) => {
                                setUserBio(event.target.value);
                            }}
                                   value={userBio}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-5">
                            <label htmlFor="pImage" className="">
                                PIC
                            </label>
                        </div>
                        <div id="pImage" className="col-7">

                            <input className="form-control" onChange={(event) => {
                                setProfileImage(event.target.value);
                            }}
                                   value={profileImage}/>
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}
export default PrivateData