import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PrivateData = ({editing}) =>

 {

 const [name, setNewName] = useState("Full Name")
 const [email, setEmail] = useState("xyz@abc.com")
 const [password, setPassword] = useState("1234")

 return (
    <>
        <div className="form-group row">
             <label for="name" className="col-1">
                    <h4>Name:</h4>
             </label>
             {!editing &&
             <div id="name">
                    <h4>{name}</h4>
             </div>
             }
             { editing &&
                          <div id="name">
                                 <input onChange = {(event) =>  setNewName(event.target.value)}
                                 value={name}/>
                          </div>
             }
        </div>

        <div className="form-group row">
              <label for="email" className="col-1">
                     <h4>Email:</h4>
              </label>

              { !editing &&
              <div id="email">
                    <h4>{email}</h4>
              </div>
              }
              { editing &&
                            <div id="email">
                                  <input onChange = {(event) => setEmail(event.target.value)}
                                  value={email}/>
                            </div>
              }

        </div>

        <div className="form-group row">
              <label for="password" className="col-2">
                      <h4>Password:</h4>
              </label>
              <div id="password">
                      { editing &&
                        <input onChange = {(event) => setPassword(event.target.value)}
                                                          value={password} type="password"/>
                      }
              </div>
        </div>



    </>
    )
}
export default PrivateData