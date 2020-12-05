import React from "react";



function RecipeSearch({ handleSearch }) {
	return (
		<input className="search" placeholder="Search by name..." onChange={event => handleSearch(event)} />
		
	);
}


export default RecipeSearch;