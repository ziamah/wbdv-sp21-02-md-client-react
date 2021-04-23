const baseUrl = process.env.REACT_APP_USERS_URL;

export const findAllFollowers = () =>
    fetch(`${baseUrl}/followlist`)
        .then(response => response.json())

export const deleteFollower = (userId) =>
    fetch(`${baseUrl}/followlist/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const findFollowerById = (userId) =>
    fetch(`${baseUrl}/followlist/${userId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const createFollower = (follower) =>
    fetch(`${baseUrl}/followlist`, {
        method: 'POST',
        body: JSON.stringify(follower),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateFollower = (userId, follower) =>
    fetch(`${baseUrl}/followlist/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(follower),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllFollowers,
    deleteFollower,
    createFollower,
    updateFollower,
    findFollowerById
}

export default api