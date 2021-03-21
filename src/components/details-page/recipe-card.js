import DietTag from "./diet-tag";

const RecipeCard = () => {
    return (
        <div className="col-12 wbdv-widget-container wbdv-widget-interior">
            <div className="col-12">
                {/*TODO: Fill Recipe Title programmatically*/}
                <h1 className="h1 wbdv-center-in-div"> Recipe Title</h1>
                {/*TODO: add link to recipe sourceName (sourceUrl) or author user profile*/}
                <a className="wbdv-link-text wbdv-center-in-div" href="#">From Spoonacular</a>
            </div>
            <hr/>
            <div className="row wbdv-widget-interior">
                <div className="col-6">
                    {/*TODO: Fill image programmatically*/}
                    <img className="d-block w-100 wbdv-padded-img"
                         src="https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg"
                         alt="birria-img.jpg"></img>
                </div>
                <div className="col-6">
                    {/*Basic Info Section*/}
                    <p className="row wbdv-body-text">
                        {/*TODO: Get summary programmatically*/}
                        Summary text Camembert de normandie chalk and cheese fromage frais.
                        Edam mozzarella cream cheese lancashire dolcelatte the big cheese gouda roquefort.
                        Cheesy feet mascarpone dolcelatte fondue bavarian bergkase lancashire dolcelatte
                        cheesecake.
                    </p>
                    {/*TODO: Fill recipe details programmatically*/}
                    <div className="row">
                        <div className="wbdv-body-text">
                            <i className="fas fa-heart wbdv-padded-icon"></i>
                            16
                        </div>
                        <div className="wbdv-padded-icon wbdv-body-text wbdv-verticalLine">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Serves: 2
                        </div>
                    </div>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Cook Time: 45 minutes
                        </div>
                    </div>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Cuisine: Mexican
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Tags:
                        </div>
                    </div>
                    <div className="row">
                        {/*TODO: map dietTags to diet attribute*/}
                        <DietTag tagType={"vegan"}/>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="wbdv-body-text">
                            Contains:
                        </div>
                    </div>
                    <div className="row">
                        {/*TODO: map dietTags to ingredient attribute*/}
                        <DietTag tagType={"treenut"}/>
                    </div>
                    <br/>
                </div>
            </div>
            <hr/>
            <div className="row wbdv-widget-interior">
                <div className="col-6">
                    {/*Ingredients Section*/}
                    <h3 className="h3">Ingredients:</h3>
                    <ul >
                        {/*TODO: Map ingredients to list items*/}
                        <li>
                            Camembert de normandie chalk and cheese fromage frais.
                        </li>
                        <li>
                            Camembert de normandie chalk and cheese fromage frais.
                        </li>
                        <li>
                            Camembert de normandie chalk and cheese fromage frais.
                        </li>
                        <li>
                            Camembert de normandie chalk and cheese fromage frais.
                        </li>
                        <li>
                            Camembert de normandie chalk and cheese fromage frais.
                        </li>
                    </ul>
                </div>
                <div className="col-6 wbdv-body-text">
                    {/*Instructions Section*/}
                    <h3 className="h3">Instructions:</h3>
                    Camembert de normandie chalk and cheese fromage frais. Edam mozzarella cream cheese lancashire dolcelatte the big cheese gouda roquefort. Cheesy feet mascarpone dolcelatte fondue bavarian bergkase lancashire dolcelatte cheesecake. Melted cheese feta hard cheese rubber cheese jarlsberg who moved my cheese macaroni cheese edam. Bocconcini fondue roquefort edam.

                    Fromage frais queso who moved my cheese. Cheese strings swiss mascarpone babybel gouda babybel parmesan goat. Queso who moved my cheese croque monsieur croque monsieur queso cheese slices goat bavarian bergkase. Cream cheese paneer macaroni cheese fromage frais pecorino red leicester cheese slices cheesy grin. Everyone loves cut the cheese.
                </div>
            </div>
        </div>
    )
}

export default RecipeCard