//const TOPICS_URL = "http://localhost:8080/api/topics";
//const WIDGETS_URL = "http://localhost:8080/api/widgets";
const USERS_URL = "http://localhost:8080/api/users";
// const USERS_URL = process.env.REACT_APP_USERS_URL;


export const findAllUsers = () =>
    fetch(USERS_URL)
        .then(response => response.json())

export const deleteUser = (UserId) =>
    fetch(`${USERS_URL}/${UserId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())



export const findUserById = (UserId) =>
    fetch(`${USERS_URL}/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const createUser = (User) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(User),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateUser = (UserId, User) =>
    fetch(`${USERS_URL}/${UserId}`, {
        method: 'PUT',
        body: JSON.stringify(User),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findAllUsers,
    deleteUser: deleteUser,
    createUser,
    updateUser: updateUser,
    findUserById
}


