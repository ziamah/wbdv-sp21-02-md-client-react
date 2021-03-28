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
        findRecipesByTitle(title)
    }, [])
    const findRecipesByTitle = (title) => {
        history.push(title)
        recipeService.findRecipesByTitle(title)
            .then((results) => {
                setResults(results)
            })
    }
    // const [recipes, setRecipes] = useState([]);
    // const [search, setSearch] = useState('');
    // const [query, setQuery] = useState('dummydatatoclearpage');
    //
    // useEffect(() => {
    //     getRecipes();
    // }, [query]);
    //
    // const getRecipes = async () => {
    //     const response = await fetch(
    //         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`);
    // const data = await response.json(); setRecipes(data.results); console.log(data); };  const
    // updateSearch = e => { setSearch(e.target.value); console.log(search); }  const getSearch = e
    // => { e.preventDefault(); setQuery(search); setSearch(""); }

    return (
        <div>
            <h2>Search Results {results.length}</h2>
            {/*<button onClick={()=>{history.goBack()}}>Back</button>*/}
            <div className="row">
                <div className="col-9">
                        <input className="form-control wbdv-center-in-div"
                           value={searchTitle}
                           onChange={(event) => {
                               setSearchTitle(event.target.value)
                               console.log(searchTitle)
                           }}
                               className="form-control"
                               placeholder="Search"/>
                </div>
            <div className="col-3">
                <button
                    onClick={() => {
                        console.log(searchTitle)
                        findRecipesByTitle(searchTitle)
                    }}
                    className="btn btn-primary btn-block">
                    Search
                </button>
            </div>
        </div>
        <br/>

        <ul className = "list-group">
        {
            results && results.Search && results.Search.map(recipe =>
                                                                <SearchCard recipeId={recipe.id}
                                                                            recipeTitle={recipe.title}/>
            )
            }

        {/*    results && results.Search && results.Search.map((recipe) => {*/}
        {/*        return(*/}
        {/*            <li className="list-group-item">*/}
        {/*                <h1>Hey</h1>*/}
        {/*                <SearchCard recipeId={recipe.id}*/}
        {/*                        recipeTitle={recipe.title}/>*/}
        {/*            </li>*/}
        {/*        )*/}
        {/*    })*/}
        {/*}*/}
        </ul>
        </div>
    )
}

export default SearchGrid