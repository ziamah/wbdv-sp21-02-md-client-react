//const FOLLOWERS_URL = "http://localhost:8080/api/followlist";
const baseUrl = process.env.REACT_APP_USERS_URL;

export const findAllFollowers = () =>
    fetch(`${baseUrl}/followlist`)
        .then(response => response.json())

export const deleteFollower = (UserId) =>
    fetch(`${baseUrl}/followlist/${UserId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())



export const findFollowerById = (UserId) =>
    fetch(`${baseUrl}/followlist/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const createFollower = (Follower) =>
    fetch(`${baseUrl}/followlist`, {
        method: 'POST',
        body: JSON.stringify(Follower),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateFollower = (UserId, Follower) =>
    fetch(`${baseUrl}/followlist/${UserId}`, {
        method: 'PUT',
        body: JSON.stringify(Follower),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findAllFollowers,
    deleteFollower,
    createFollower,
    updateFollower,
    findFollowerById
}
