
import React from "react";
import Heading from "../layout/Heading";
import RecipeList from "./RecipeList";

export function Home() {
	return (
		<>
			<Heading title="RecipePuppy" />
			<RecipeList />
		</>
	);
}

export default Home;