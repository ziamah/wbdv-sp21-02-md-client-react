import React from "react";

class RecipeCard extends React.Component {
    render() {
        return (
            <div className="col-12 wbdv-widget-container wbdv-widget-interior">
                <div className="col-12">
                    <h1 className="h1 wbdv-center-in-div"> Recipe Title</h1>
                </div>
                <hr/>
                <div className="col-6">
                    <img className="d-block w-100 wbdv-padded-img"
                         src="https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg"
                         alt="birria-img.jpg"/>
                </div>
                <div className="col-6">

                </div>
            </div>
        )
    }
}

export default RecipeCard