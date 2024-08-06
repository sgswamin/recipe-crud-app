import React from 'react';
import RecipeRow from './RecipeRow'; // Import the RecipeRow component

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <section className="mt-3">
      <table className="table table-striped caption-top mb-0">
        <caption>
          {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} listed.
        </caption>
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecipeRow
                key={index}
                recipe={recipe}
                deleteRecipe={() => deleteRecipe(index)}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No recipes listed. Create one now!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default RecipeList;

