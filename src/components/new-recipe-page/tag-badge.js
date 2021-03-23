const TagBadge = ({tag}) => {
    let label = tag
    if (tag === "veg") {
        label = "vegetarian"
    }
    if (tag === "gf") {
        label = "gluten-free"
    }
    if (tag === "pesc") {
        label = "pescatarian"
    }
    if (tag === "whole30") {
        label = "whole 30"
    }
    const tagClassName = `wbdv-${tag}-tag`

    return (
        <button className={`btn ${tagClassName} btn-group-margin`}>
            {label}
        </button>
    )
}

export default TagBadge
