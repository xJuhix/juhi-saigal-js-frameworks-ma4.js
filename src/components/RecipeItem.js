import React from "react";
import PropTypes from "prop-types";

function RecipeItem({ title, thumbnail, ingredients }) {
    return (
        <div className="col-4">
            <div className="card mt-3">
                <img className="card-img-top" src={thumbnail} alt=""/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{ingredients}</p>
                </div>
            </div>
        </div>
    );
}


RecipeItem.propTypes = {
    thumbnail: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	ingredients: PropTypes.string.isRequired
};

export default RecipeItem;

