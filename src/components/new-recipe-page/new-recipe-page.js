import DietTagsSelector from "./diet-tags-selection";
import IngredientTagsSelector from "./ingredient-tags-selection";

const NewRecipe = () => {
    return (
        <div className="wbdv-widget-container-light wbdv-widget-interior">
            <h1 className="h1 wbdv-center-in-div">
                New Recipe
            </h1>
            <hr/>
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <img className="d-block w-100 wbdv-padded-img"
                             src="https://soilhealthinstitute.org/wp-content/uploads/2016/11/thumbnail-default.jpg"
                             alt="default-img.jpg"></img>
                    </div>
                    <div className="row wbdv-center-in-div">
                        <button className="btn wbdv-secondary-btn">
                            Click to add a photo
                        </button>
                    </div>
                </div>
                <div className="col-8">
                    {/*    TODO: Connect form to server*/}

                    <p className="row">
                        <div className="col-2">
                            <label htmlFor="title-field" className="wbdv-label">Recipe Title: </label>
                        </div>
                        <input id="title-field" className="col-8" placeholder="Abuela's Famous Birria Tacos"/>
                    </p>
                    <p className="row">
                        <div className="col-2">
                            <label htmlFor="summary-field" className="wbdv-label">Summary: </label>
                        </div>
                        <textarea id="summary-field" className="col-8"
                                  placeholder="A few sentences describing your recipe"/>
                    </p>
                    <p className="row">
                        <div className="col-2">
                            <label htmlFor="diet-options" className="wbdv-label">Diet Tags: </label>
                        </div>
                        {/*TODO: Allow selector buttons to add diet tags*/}
                        <div className="col-10">
                            <div className="row">
                        <DietTagsSelector classname="col-10"/>
                            </div>
                        </div>
                    </p>
                    <p className="row">
                        <div className="col-2">
                            <label htmlFor="ingredient-options" className="wbdv-label">Ingredient Tags: </label>
                        </div>
                        {/*TODO: Allow selector buttons to add diet tags*/}
                        <div className="col-10">
                            <div className="row">
                                <IngredientTagsSelector/>
                            </div>
                        </div>
                    </p>
                    <p className="row">
                        <div className="col-2">
                            <label htmlFor="ingredients-field" className="wbdv-label">Ingredient List: </label>
                        </div>
                        <textarea id="ingredients-field" className="col-8" rows="5"
                                  placeholder={`1. 1 cup of water\n2. 2 large eggs\n3. ...`}/>
                    </p>
                    <p className="row">
                        <div className="col-2">
                            <label htmlFor="instructions-field" className="wbdv-label">Instructions: </label>
                        </div>
                        <textarea id="instructions-field" className="col-8" rows="7"
                                  placeholder="Write the recipe steps here"/>
                    </p>
                    <div className="row wbdv-center-in-div">
                        <h1 className="">
                            <button className="btn wbdv-affirmative-btn">
                                Submit
                            </button>
                        </h1>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default NewRecipe