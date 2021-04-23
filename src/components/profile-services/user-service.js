
const USERS_URL = "http://localhost:8080/api/users";

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

export const findUserListById = (UserId) =>
    fetch(`${USERS_URL}/list/${UserId}`, {
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
    findUserById,
    findUserListById
}


