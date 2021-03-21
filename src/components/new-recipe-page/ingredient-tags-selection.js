import TagBadge from "./tag-badge";

const IngredientTagsSelector = () => {
    const diets = ["dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite",
        "treenut", "wheat"]
    return (
        <>
            {diets.map(diet =>
                <h3>
                    <TagBadge tag={diet}/>
                </h3>
            )}
        </>
    )
}

export default IngredientTagsSelector