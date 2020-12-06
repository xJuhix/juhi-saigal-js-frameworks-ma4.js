import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from ".././constants/api";
import SearchRecipe from "./SearchRecipe";


function RecipeList() {
	const [recipes, setRecipes] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState([]);


	useEffect(() => {
		fetch(BASE_URL)
			.then(response => response.json())
			.then(json => {
				setRecipes(json.results);
				setFilteredRecipes(json.results);
			})
			.catch(error => console.log(error))
	}, []);

	const recipeSearch = function(e) {
		console.log(e.target.value)
		const searchValue = e.target.value.toLowerCase();
		const filteredArray = recipes.filter(r => {
			return r.title.toLowerCase().startsWith(searchValue)
		})
		setFilteredRecipes(filteredArray);
	}
	
	
	return (
		<>
			<SearchRecipe handleSearch={recipeSearch} />
			<Row>
				{filteredRecipes.map(r => (
					<RecipeItem key={r.title} title={r.title} thumbnail={r.thumbnail} ingredients={r.ingredients}/>
				))}
			</Row>
        </>
	);
}

export default RecipeList;