import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeCreate from "./RecipeCreate";
import recipeData from "./data";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main className="container mt-5">
      <header className="bg-primary bg-gradient text-white rounded-bottom p-4">
        <h1 className="text-center display-5">Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </main>
  );
  
}


export default App;
