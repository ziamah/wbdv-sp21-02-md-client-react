const baseUrl = process.env.REACT_APP_USERS_URL;

/* Returns a list of all user objects in the database */
export const findAllUsers = () =>
    fetch(`${baseUrl}/users`)
        .then(response => response.json())

/* Returns a user object corresponding to the supplied userId */
export const findUserById = (userId) =>
    fetch(`${baseUrl}/users/${userId}`)
        .then(response => response.json())

/* Returns a user object if credentials are valid or null if invalid */
export const loginUser = (email, password) =>
    fetch(`${baseUrl}/login/${email}/${password}`)
        .then(response => response.json())

/* Returns a user object if credentials are valid or null if invalid */
// export const registerUser = (user) =>
//     fetch(`${baseUrl}/login/${username}/${password}`)
//         .then(response => response.json())


/* Returns user object for current user */
export const getCurrentUser = () =>
    fetch(`${baseUrl}/profile`)

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
        .then(response => response.json())

const api = {
    findAllUsers,
    deleteUser,
    createUser,
    updateUser,
    findUserById,
    loginUser
}

export default api