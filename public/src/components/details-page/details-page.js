import React, {useState} from "react";
import "../../index.css";
import RecipeReviews from "./details-reviews";
import style from "./details-modules.css"


const RecipeDetails = ({title, calories, image, ingredients,
  cuisineType, dietLabels, url}) => {

  const cal = Math.round(calories);
  const [ show, setShow ] = useState(false);
  const [ showInfo, setShowInfo ] = useState(false);
  const [ showReviews, setShowReviews ] = useState(false);

  const showShow = () => {
    setShow(!show)
    setShowInfo(false)
    setShowReviews(false)
  };

  const showMoreInfo = () => {
    setShowInfo(!showInfo)
    setShow(false)
    setShowReviews(false)
  };

  const showShowReviews = () => {
    setShowReviews(!showReviews)
    setShowInfo(false)
    setShow(false)
  };

  return(
      <div className="recipe">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h1 className="mt-2">{title}</h1>
        </a>
        <img className="wbdv-image" src={image} alt =""/>
        <h5>Calories: {cal}</h5>

        <div>
          <button className="btn-dark mb-3" onClick={showShow}>Ingredients</button>
          <button className="btn-dark ml-3 mb-3"onClick={showMoreInfo}>More Info</button>
          <button className="btn-dark ml-3 mb-3"onClick={showShowReviews}>Reviews</button>
        </div>
        {show && <ul>
          {ingredients.map(ingredient => (
              <li> {ingredient.text} </li>
          ))}
        </ul>}

        {showInfo && <ul>
              <li> {cuisineType} </li>
              <li> {dietLabels} </li>
        </ul>}

        {showReviews && <ul>
          <RecipeReviews/>
        </ul>}



      </div>
  )
}

export default RecipeDetails;