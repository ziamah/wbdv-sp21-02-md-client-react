const baseUrl = process.env.REACT_APP_USERS_URL;

export const findAllUsers = () =>
    fetch(`${baseUrl}/users`)
        .then(response => response.json())

export const deleteUser = (UserId) =>
    fetch(`${baseUrl}/users/${UserId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())



export const findUserById = (UserId) =>
    fetch(`${baseUrl}/users/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const findUserListById = (UserId) =>
    fetch(`${baseUrl}/users/list/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const createUser = (User) =>
    fetch(`${baseUrl}/users`, {
        method: 'POST',
        body: JSON.stringify(User),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateUser = (UserId, User) =>
    fetch(`${baseUrl}/users/${UserId}`, {
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