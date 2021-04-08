const baseUrl = process.env.REACT_APP_USERS_URL;

export const findAllUsers = () =>
    fetch(`${baseUrl}`)
        .then(response => response.json())

export const findUserById = (userId) =>
    fetch(`${baseUrl}/${userId}`)
        .then(response => response.json())

export const deleteUser = (userId) =>
    fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const createUser = (user) =>
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateUser = (userId, user) =>
    fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllUsers,
    deleteUser,
    createUser,
    updateUser,
    findUserById
}

export default api