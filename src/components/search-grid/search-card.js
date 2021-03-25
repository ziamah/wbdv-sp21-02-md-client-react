import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import recipeService from '../../services/recipe-service'

const SearchCard = (
    {
        movieTitle,
        //movieId

    }) => {
    const {imdbID} = useParams()
    const history = useHistory()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        findMovieByImdbID()
    }, [])
    const findMovieByImdbID = () => {
        recipeService.findMovieByImdbID(imdbID)
            .then((data) => {
                setMovie(data)
            })
    }
    return(

    <div className="card mb-3" style="max-width: 540px;">
        <div className="row g-0">
            <div className="col-md-4">
                {/*<img src="..." alt="..."/>*/}
                <p>
                    <img src={movie.Poster} width={100} style={{float: "right"}}/>
                    {movie.Plot}
                </p>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a little bit
                        longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                        ago</small></p>
                </div>
            </div>
        </div>
        {/*{JSON.stringify(movie)}*/}
    </div>
    )
}
export default SearchCard


