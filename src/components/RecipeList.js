import React, { useState, useEffect } from "react";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from ".././constants/api";
import SearchRecipe from "./SearchRecipe";

function RecipeList() {
	const [Recipes, setRecipes] = useState([]);
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
		const filteredArray = Recipes.filter(recipe => {
            return recipe.title.toLowerCase().startsWith(searchValue)
        })

		setFilteredRecipes(filteredArray);
	};

	
	return (
		<div>
			<SearchRecipe handleSearch={recipeSearch} />
				{filteredRecipes.map(recipe => {
					const { title, thumbnail, ingredients } = recipe;

					return (
						<div sm={6} md={3} key={recipe.title}>
							<RecipeItem title={title} ingredients={ingredients} thumbnail={thumbnail} />
						</div>
					);
				})}

        </div>
	);
}

export default RecipeList;