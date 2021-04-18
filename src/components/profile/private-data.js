import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PrivateData = ({userName, setUserName, userPassword, setUserPassword, updateUser, userId, user,
userBio, setUserBio, profileImage, setProfileImage}) =>

 {


 const [email, setEmail] = useState("xyz@abc.com")
 const [password, setPassword] = useState("1234")
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
                    <i onClick={() => {setEditing(false);
                       updateUser(userId, {...user, userName:userName, userPW:userPassword, userBio:userBio,
                       userPicUrl:profileImage});
                       }} className="fas fa-check"></i>

        }
        </div>

        {/*</h1>*/}
        </div>



    <div className="container">




        <div className="form-group row">
            <div class="col-5">
                <label for="name" className="">
                    Name
                </label>
             </div>
             { editing &&
             <div id="name" className="col-7">
                 <input className = "form-control" onChange = {(event) =>  setUserName(event.target.value)}
                 value={userName}/>

             </div>
             }

             { !editing &&
                          <div id="name" className="col-7">

                              {userName}
                          </div>
             }

        </div>

        <div className="form-group row">
            <div className="col-5">
              <label for="email" className="">
                     Email
              </label>
            </div>

              { !editing &&
              <div id="email" className="col-7">
                    {email}
              </div>
              }
              { editing &&
                            <div id="email" className="col-7">
                                  <input className = "form-control" onChange = {(event) => setEmail(event.target.value)}
                                  value={email}/>
                            </div>
              }

        </div>

        { editing &&
        <div className="form-group row">
            <div class="col-5">
              <label for="password" className="">
                      Password
              </label>
            </div>
              <div id="password" className="col-7">

                        <input className = "form-control" onChange = {(event) => {setUserPassword(event.target.value);
                                                                        }}
                                                          value={userPassword} type="password"/>

              </div>
        </div>
        }

        { editing &&
                <div className="form-group row">
                    <div class="col-5">
                      <label for="bio" className="">
                              Bio
                      </label>
                    </div>
                      <div id="bio" className="col-7">

                                <input className = "form-control" onChange = {(event) => {setUserBio(event.target.value);
                                                                                }}
                                                                  value={userBio} />

                      </div>
                </div>
        }


        { editing &&
            <div className="form-group row">
               <div class="col-5">
                      <label for="pImage" className="">
                              PIC
                      </label>
               </div>
               <div id="pImage" className="col-7">

                 <input className = "form-control" onChange = {(event) => {setProfileImage(event.target.value);
                                                                                }}
                                      value={profileImage}/>

               </div>
            </div>
        }




    </div>
    </div>
    )
}
export default PrivateData