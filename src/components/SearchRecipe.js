import React from "react";



function recipeSearch({ handleSearch }) {
	return (
		<input className="search" placeholder="Search by name..." onChange={event => handleSearch(event)} />
		
	);
}


export default recipeSearch;