/*import React from 'react';
import RecipeList from "./components/RecipeList" 

function App() {
  return (
    <div className="App">
      <RecipeList />
    </div>
  );
}

export default App;*/

import React from "react";
import Heading from "./components/layout/Heading";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
			<Heading title="Title from prop" subtitle="Subtitle from prop" />
		</Layout>
	);
}

export default App;
