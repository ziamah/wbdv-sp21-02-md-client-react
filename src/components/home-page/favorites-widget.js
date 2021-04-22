import {Link} from "react-router-dom";
import favoritesService from '../../services/favorites-service';
import {useEffect, useState} from "react";

const FavoritesWidget = ({user}) => {
    const [topThreeFavorites, setTopThreeFavorites] = useState([])

    useEffect(() => {
        favoritesService.findFavoritesByUser(user.userID)
            .then((response) => response.length >= 3 ?
                response.slice(0, 3) : response)
            .then((result) => setTopThreeFavorites(result))
    }, [user.userID])

    return (
        <div className="wbdv-widget-container">
            <div className="wbdv-contrast-header">
                <h3 className="wbdv-center-in-div">Recent Favorites</h3>
            </div>
            <div className="wbdv-widget-interior">
                {topThreeFavorites.length > 0 && topThreeFavorites.map(favorite =>
                    <>
                        <div>
                            <img className="d-block w-100 wbdv-padded-img"
                                 src={`${favorite.recipePhotoUrl}`}
                                 alt={`${favorite.recipeName} photo`}/>
                                <h5 className="h5 wbdv-center-in-div">{favorite.recipeName}</h5>
                            <div className="wbdv-center-in-div">
                                <Link to={`/details/${favorite.recipeId}`}>
                                    <button className="btn wbdv-affirmative-btn">
                                        VIEW FULL RECIPE
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <hr/>
                    </>
                )}
                {
                    topThreeFavorites.length <= 0 &&
                    <div className="wbdv-center-in-div">
                        You don't have any favorite recipes yet! Explore the site to save recipes you love.
                    </div>
                }
            </div>
        </div>

    )
}


export default FavoritesWidget