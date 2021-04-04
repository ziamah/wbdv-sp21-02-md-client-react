const DietTag = ({tagType}) => {
    let className = "";
        // Diet Tags
        if (tagType === "gf") {
            className = "wbdv-gf-tag"
        }
        if (tagType === "keto") {
            className = "wbdv-keto-tag"
        }
        if (tagType === "vegetarian") {
            className = "wbdv-veg-tag"
        }
        if (tagType === "vegan") {
            className = "wbdv-vegan-tag"
        }
        if (tagType === "pescatarian") {
            className = "wbdv-pesc-tag"
        }
        if (tagType === "paleo") {
            className = "wbdv-paleo-tag"
        }
        if (tagType === "primal") {
            className = "wbdv-primal-tag"
        }
        if (tagType === "whole30") {
            className = "wbdv-whole30-tag"
        }
        // Ingredient Tags
        // if (tagType === "dairy") {
        //     className = "wbdv-dairy-tag"
        // }
        // if (tagType === "egg") {
        //     className = "wbdv-egg-tag"
        // }
        // if (tagType === "gluten") {
        //     className = "wbdv-gluten-tag"
        // }
        // if (tagType === "grain") {
        //     className = "wbdv-grain-tag"
        // }
        // if (tagType === "peanut") {
        //     className = "wbdv-peanut-tag"
        // }
        // if (tagType === "seafood") {
        //     className = "wbdv-seafood-tag"
        // }
        // if (tagType === "sesame") {
        //     className = "wbdv-sesame-tag"
        // }
        // if (tagType === "shellfish") {
        //     className = "wbdv-shellfish-tag"
        // }
        // if (tagType === "soy") {
        //     className = "wbdv-soy-tag"
        // }
        // if (tagType === "sulfite") {
        //     className = "wbdv-sulfite-tag"
        // }
        // if (tagType === "treenut") {
        //     className = "wbdv-treenut-tag"
        // }
        // if (tagType === "wheat") {
        //     className = "wbdv-wheat-tag"
        // }
    return (
        <span className={`badge ${className} btn-group-margin`}>
        {/*Tag Type Name here*/}
        {/*TODO: Can add search capability to onClick if we want*/}
        {tagType}
        </span>
    )
}

export default DietTag