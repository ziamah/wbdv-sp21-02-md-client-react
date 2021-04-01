import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PrivateData = () =>

 {

 const [name, setNewName] = useState("MManzur Morshed")
 const [email, setEmail] = useState("xyz@abc.com")
 const [password, setPassword] = useState("1234")
 const [editing, setEditing] = useState(false);

 return (
 <div className="background-followers">
        <h1 className="fill-background"> Private Section

        {!editing &&


                    <i onClick={() => setEditing(true)} className="float-right fas fa-edit"></i>

                 }

        {editing &&
                    <i onClick={() => setEditing(false)} className="float-right fas fa-check"></i>

        }

        </h1>



    <div className="container">




        <div className="form-group row">
            <div class="col-5">
                <label for="name" className="">
                    Name
                </label>
             </div>
             { editing &&
             <div id="name" className="col-7">
                 <input className = "form-control" onChange = {(event) =>  setNewName(event.target.value)}
                 value={name}/>

             </div>
             }

             { !editing &&
                          <div id="name" className="col-7">

                              {name}
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

                        <input className = "form-control" onChange = {(event) => setPassword(event.target.value)}
                                                          value={password} type="password"/>

              </div>
        </div>
        }



    </div>
    </div>
    )
}
export default PrivateData