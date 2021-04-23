import TagBadge from "./tag-badge";

const DietTagsSelector = () => {
    const diets = ["gf", "keto", "veg", "vegan", "pesc", "paleo", "primal", "whole30"]
    return (
        <>
            {diets.map((diet, index) =>
                <h2 key={index}>
                    <TagBadge tag={diet}/>
                </h2>
            )}
        </>
    )
}

export default DietTagsSelector