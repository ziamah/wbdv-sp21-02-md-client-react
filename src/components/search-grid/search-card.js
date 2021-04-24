import React from 'react'
import {Link } from 'react-router-dom'


const SearchCard = (
    {
        id,
        title,
        image,
    }) => {

    return (

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                            <img className="d-block w-100 wbdv-padded-img"
                                 src={image}
                                 alt={`${title}`}
                                 width={500}
                                 height={400}/>
                    </div>
                    <div className="col-md-8" >
                        <div className="wbdv-widget-container wbdv-widget-interior">
                            <div className="card-body">
                                <h3 className="h3 card-title">{title}</h3>
                                <Link to={"/details/" + id} >
                                    <button className="btn wbdv-affirmative-btn">
                                        VIEW FULL RECIPE
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    )
}
export default SearchCard

// {recipeDetails.slice(0,10)}
