import React, {useState} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import PrivateData from './private-data';
import './profile.css'

const Profile = ({userid="superman", following="ab,cd,ef", followers="ab,cd,ef",
                 likes="recipe1,recipe2", recipes="myrecipe1,myrecipe2"}) => {

    const [privatemode, setPrivateMode] = useState(true);
    const [editing, setEditing] = useState(false);

    return(
    <div className="container pt-3">
        <div className="form-group row">
            <div className="col-4">
                <h1>Profile</h1>
            </div>
            <div className="col-8">
                {privatemode && !editing &&


                        <span className="float-right"><i onClick={() => setEditing(true)}
                        className="fas fa-2x fa-edit">
                        </i></span>


                }
                {
                editing &&
                <span className="float-right"><i onClick={() => setEditing(false)}
                                        className="fas fa-2x fa-check"></i>
                </span>
                }
            </div>
        </div>
        <div className="form-group row">
            <label for="userid" className="col-1">
                <h4>UserId:</h4>
            </label>
            <div id="userid">
                <h4>{userid}</h4>
            </div>
        </div>

        {privatemode && <PrivateData editing={editing}/>}

    <div className="form-group row">
         <label for="following" className="col-1">
                <h4>Following:</h4>
         </label>
         <div id="following" className="add-padding">
                <h4>{following}</h4>
         </div>
    </div>

    <div className="form-group row">
             <label for="followers" className="col-1">
                    <h4>Followers:</h4>
             </label>
             <div id="followers" className="add-padding">
                    <h4>{followers}</h4>
             </div>
    </div>

    <div className="form-group row">
             <label for="likes" className="col-1">
                    <h4>Likes:</h4>
             </label>
             <div id="likes" className="">
                    <h4>{likes}</h4>
             </div>
    </div>
    <div className="form-group row">
             <label for="recipes" className="col-3">
                    <h4>Posted Recipes:</h4>
             </label>
             <div id="recipes" className="add-padding-right">
                    <h4>{recipes}</h4>
             </div>
    </div>
    {privatemode &&
                    <BrowserRouter>
                        <Link to="#">
                            Add Recipe
                        </Link>
                    </BrowserRouter>
    }
    </div>
    )
}

export default Profile


