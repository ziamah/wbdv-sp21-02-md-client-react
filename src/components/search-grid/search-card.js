import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import recipeService from '../../services/recipe-service'

const SearchCard = (
    {
        movieTitle,
        //movieId

    }) => {
    const {imdbID} = useParams()
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
    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    {/*<img src="..." alt="..."/>*/}
                    <p>
                        <h4 className="h3 wbdv-center-in-div"> Recipe Title</h4>
                        <img className="d-block w-100 wbdv-padded-img"
                             src="https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg"
                             alt="birria-img.jpg"></img>
                        {/*<img src={movie.Poster} width={100}/>*/}
                        {movie.Plot}
                    </p>
                </div>
                <div className="col-md-8">
                    <div className="wbdv-widget-container wbdv-widget-interior">
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            {/*TODO:Figure out how to render the text here:*/}
                            <p className="wbdv-body-text">This is a wider card with supporting text below
                                as a
                                natural lead-in to additional content. This content is a little bit
                                longer.</p>
                            <Link to={"/details"}>
                                <button className="btn wbdv-affirmative-btn">
                                    VIEW FULL RECIPE
                                </button>
                            </Link>
                            <p className="card-text"><small className="text-muted">Last updated 3
                                mins
                                ago</small></p>
                        </div>
                    </div>
                </div>
                {/*{JSON.stringify(movie)}*/}
            </div>
        </div>

    )
}
export default SearchCard


