const findMoviesByTitle = (title) => {
    return fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
        .then(response => response.json())
}

const findMovieByImdbID = (imdbID) => {
    return fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
        .then(response => response.json())
}

export default {
    findMoviesByTitle, findMovieByImdbID
}