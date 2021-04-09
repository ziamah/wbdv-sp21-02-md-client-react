const FOLLOWERS_URL = "http://localhost:8080/api/followlist";

export const findAllFollowers = () =>
    fetch(FOLLOWERS_URL)
        .then(response => response.json())

export const deleteFollower = (UserId) =>
    fetch(`${FOLLOWERS_URL}/${UserId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())



export const findFollowerById = (UserId) =>
    fetch(`${FOLLOWERS_URL}/${UserId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const createFollower = (Follower) =>
    fetch(FOLLOWERS_URL, {
        method: 'POST',
        body: JSON.stringify(Follower),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateFollower = (UserId, Follower) =>
    fetch(`${FOLLOWERS_URL}/${UserId}`, {
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


