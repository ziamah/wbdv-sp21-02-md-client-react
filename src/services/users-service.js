const baseUrl = process.env.REACT_APP_USERS_URL;
// const baseUrl = "https://recipehero2021-backend.herokuapp.com/";


/* CRUD operations */

/* Permanently removes a user object from the database */
export const deleteUser = (userId) =>
    fetch(`${baseUrl}/users/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

/* Adds a new user object from the database */
export const createUser = (user) =>
    fetch(`${baseUrl}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

/* Updates the data for an existing user object from the database */
export const updateUser = (userId, user) =>
    fetch(`${baseUrl}/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

/* Returns a list of all user objects in the database */
export const findAllUsers = () =>
    fetch(`${baseUrl}/users`)
        .then(response => response.json());

/* Returns a user object corresponding to the supplied userId */
export const findUserById = (userId) =>
    fetch(`${baseUrl}/users/${userId}`)
        .then(response => response.json());

/* User auth operations */

/* Returns a user object if credentials are valid or null if invalid */
export const loginUser = (credentials) =>
    fetch(`${baseUrl}/users/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(responseText => responseText ? JSON.parse(responseText) : null)


export const registerUser = (user) =>
    fetch(`${baseUrl}/users/register`, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

/* Returns user object for current user */
export const getCurrentUser = () =>
    fetch(`${baseUrl}/users/profile`,
          {
              method: "POST",
              credentials: "include",
              headers: {
                  'content-type': 'application/json'
              }
          })
        .then(response => response.text())
        .then(responseText => responseText ? JSON.parse(responseText) : null)

/* Logs the current user out by invalidating the session */
export const logoutUser = () =>
    fetch(`${baseUrl}/users/logout`,
        {
            method: "POST",
            credentials: "include",
        })
        .then();

const api = {
    findAllUsers,
    deleteUser,
    createUser,
    updateUser,
    findUserById,
    loginUser,
    registerUser,
    getCurrentUser,
    logoutUser
}

export default api