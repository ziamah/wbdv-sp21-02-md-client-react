const USERS_URL = "https://wbdv-generic-server.herokuapp.com/api/md/users";

export const findAllUsers = () =>
    fetch(USERS_URL)
        .then(response => response.json())

export const deleteUser = (userId) =>
    fetch(`${USERS_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const findUserById = (userId) =>
    fetch(`${USERS_URL}/${userId}`)
        .then(response => response.json())

export const createUser = (user) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateUser = (userId, user) =>
    fetch(`${USERS_URL}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findAllUsers,
    deleteUser: deleteUser(),
    createUser,
    updateUser: updateUser,
    findUserById
}