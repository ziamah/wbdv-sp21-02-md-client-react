import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import recipeService from '../../services/recipe-service'
import SearchCard from "./search-card";
//TODO: import recipe service after it's made

const SearchGrid = () => {
    const history = useHistory()
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
    const [results, setResults] = useState({Search: []})
    useEffect(() => {
        setSearchTitle(title)
        findMoviesByTitle(title)
    }, [])
    const findMoviesByTitle = (title) => {
        history.push(title)
        recipeService.findMoviesByTitle(title)
            .then((results) => {
                setResults(results)
            })
    }
    return(
        <div>
            <h2>Search Results {results.length}</h2>
            {/*<button onClick={()=>{history.goBack()}}>Back</button>*/}
            <div className="row">
                <div className="col-9">
                    <input value={searchTitle}
                           onChange={(event) => {
                               setSearchTitle(event.target.value)
                           }}
                           className="form-control"/>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => {
                            console.log(searchTitle)
                            findMoviesByTitle(searchTitle)
                        }}
                        className="btn btn-primary btn-block">
                        Search
                    </button>
                </div>
            </div>
            <br/>
            <ul className="list-group">
                {
                    results && results.Search && results.Search.map((movie) => {
                        return(
                            <ul>
                                <SearchCard movieTitle={movie.title}/>
                            </ul>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchGrid