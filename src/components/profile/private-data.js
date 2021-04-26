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
            <div className="row wbdv-section-header">
                <div>
                    <h1 className="h3 wbdv-section-header">
                        Private Section
                    </h1>
                </div>
                <div >
                    {!editing &&
                    <i className="float-right" onClick={() => setEditing(true)} className="fas fa-edit"></i>
                    }
                    {editing &&
                    <i className="float-right" onClick={() => {
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
            <br/>

            <div className="container section-container">
                <div className="form-group row">
                    <div className="col-5">
                        <label htmlFor="name" className="wbdv-body-text">
                            Username:
                        </label>
                    </div>
                    {editing &&
                    <div id="name" className="col-7">
                        <input className="form-control" onChange={(event) => setUserName(event.target.value)}
                               value={userName}/>
                    </div>
                    }
                    {!editing &&
                    <div id="name" className="col-7 wbdv-body-text">
                        {userName}
                    </div>
                    }
                </div>
                <div>
                    {
                        !editing &&
                            <>
                            <div className="row">
                            <label htmlFor="email" className="col-5 wbdv-body-text">
                                    Email:
                                </label>
                            </div>
                            <div className="row">
                            <div id="email" className="col-12 wbdv-body-text">
                                    {userEmail}
                                </div>
                            </div>
                            </>
                    }

                </div>
                {editing &&
                <>
                    <div className="form-group row">
                        <div className="col-5">
                            <label htmlFor="password" className="wbdv-body-text">
                                Password:
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
                            <label htmlFor="bio" className="wbdv-body-text">
                                Bio:
                            </label>
                        </div>
                        <div id="bio" className="col-7">

                            <textarea rows={3} className="form-control" onChange={(event) => {
                                setUserBio(event.target.value);
                            }}
                                   value={userBio}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-5">
                            <label htmlFor="pImage" className="wbdv-body-text">
                                Photo URL:
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
                <br/>

            </div>
        </div>
    )
}
export default PrivateData