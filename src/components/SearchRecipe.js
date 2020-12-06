import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from "prop-types";



function RecipeSearch({ handleSearch }) {
	return (
			<InputGroup className="search">
				<FormControl 
					placeholder="Search for recipe..." 
					onChange={event => handleSearch(event)} />
			</InputGroup>
	);
}

RecipeSearch.propTypes = {
	handleSearch: PropTypes.func.isRequired
};

export default RecipeSearch;