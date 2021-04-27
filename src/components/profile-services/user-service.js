const baseUrl = process.env.REACT_APP_USERS_URL;

export const findAllUsers = () =>
    fetch(baseUrl)
        .then(response => response.json())

export const deleteUser = (UserId) =>
    fetch(`${baseUrl}/${UserId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())



export const findUserById = (UserId) =>
    fetch(`${baseUrl}/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const findUserListById = (UserId) =>
    fetch(`${baseUrl}/list/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const createUser = (User) =>
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(User),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateUser = (UserId, User) =>
    fetch(`${baseUrl}/${UserId}`, {
        method: 'PUT',
        body: JSON.stringify(User),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllUsers,
    deleteUser: deleteUser,
    createUser,
    updateUser: updateUser,
    findUserById,
    findUserListById
}

export default api