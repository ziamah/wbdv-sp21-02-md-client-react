import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PrivateData = ({editing}) =>

 {

 const [name, setNewName] = useState("Full Name")
 const [email, setEmail] = useState("xyz@abc.com")
 const [password, setPassword] = useState("1234")

 return (
    <div className="container">

        <div className="form-group row">
            <div class="col-3">
                <label for="name" className="">
                    Name
                </label>
             </div>
             { editing &&
             <div id="name" className="col-9">
                 <input className = "form-control" onChange = {(event) =>  setNewName(event.target.value)}
                 value={name}/>
             </div>
             }

             { !editing &&
                          <div id="name" className="">
                              name
                          </div>
             }

        </div>

        <div className="form-group row">
            <div className="col-3">
              <label for="email" className="">
                     Email
              </label>
            </div>

              { !editing &&
              <div id="email">
                    {email}
              </div>
              }
              { editing &&
                            <div id="email" className="col-9">
                                  <input className = "form-control" onChange = {(event) => setEmail(event.target.value)}
                                  value={email}/>
                            </div>
              }

        </div>

        <div className="form-group row">
            <div class="col-3">
              <label for="password" className="">
                      Password
              </label>
            </div>
              <div id="password" className="col-9">
                      { editing &&
                        <input className = "form-control" onChange = {(event) => setPassword(event.target.value)}
                                                          value={password} type="password"/>
                      }
              </div>
        </div>



    </div>
    )
}
export default PrivateData