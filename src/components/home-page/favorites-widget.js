import {Link} from "react-router-dom";
import favoritesService from '../../services/favorites-service';
import {useEffect, useState} from "react";

const FavoritesWidget = ({user}) => {
    const [topThreeFavorites, setTopThreeFavorites] = useState([])

    useEffect(  () => {
        const top3 = async () => {
            const favoritesList = await favoritesService.findFavoritesByUser(user.userID)
            if (favoritesList.length >= 3) {
                return favoritesList.slice(0, 3)
            }
            return favoritesList
        }
        setTopThreeFavorites(top3)
    }, [])

    return (
        <div className="wbdv-widget-container">
            <div className="wbdv-contrast-header">
                <h3 className="wbdv-center-in-div">Recent Favorites</h3>
            </div>
            <div className="wbdv-widget-interior">
                {topThreeFavorites.map(favorite =>
                        <>
                            <div>
                                <img className="d-block w-100 wbdv-padded-img"
                                     src={`${favorite.recipePhotoUrl}`}
                                     alt={`${favorite.recipeName} photo`}/>
                                <Link to={`/details/${favorite.recipeId}`}>
                                    <h5 className="h5 wbdv-center-in-div">{favorite.recipeName}</h5>
                                </Link>
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
            </div>
        </div>

    )
}

export default FavoritesWidget