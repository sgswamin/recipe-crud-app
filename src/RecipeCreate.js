import React, { useState } from 'react';

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({
      ...recipe,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: ''
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cuisine">Cuisine</label>
        <input
          type="text"
          className="form-control"
          id="cuisine"
          name="cuisine"
          value={recipe.cuisine}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo URL</label>
        <input
          type="text"
          className="form-control"
          id="photo"
          name="photo"
          value={recipe.photo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          className="form-control"
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="preparation">Preparation</label>
        <textarea
          className="form-control"
          id="preparation"
          name="preparation"
          value={recipe.preparation}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
}

export default RecipeCreate;
