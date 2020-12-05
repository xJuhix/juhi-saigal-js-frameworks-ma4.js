import React from 'react';
import RecipeList from "./components/RecipeList" 
import SearchRecipe from "./components/SearchRecipe";
import './App.css';
import recipeSearch from './components/SearchRecipe';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{position:"sticky", top: 0, zIndex: 1071}}>
        <span className="text-light">RecipePuppy</span>
        <div className="collapse navbar-collapse justify-content-end">
          <form className="form-inline my-2 my-lg-0">
          <recipeSearch handleSearch={SearchRecipe} />
          </form>
        </div>
      </nav>
      <RecipeItem search={RecipeList} />
      <footer className="text-mute mt-3 pt-3 pb-3 bg-secondary">
        <div className="container">
        ©2020 RecipePuppy.com
        </div>
      </footer>
    </div>
  )
}

export default App;
