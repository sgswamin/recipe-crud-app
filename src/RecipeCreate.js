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
    <form name="create" onSubmit={handleSubmit} className="mt-5">
      <h2>Add a new Recipe</h2>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 p-3">
          
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={handleChange}
              value={recipe.name}
              required
            />
          </div>
          <div className="col-md-3 p-3">
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              className="form-control"
              placeholder="Cuisine"
              onChange={handleChange}
              value={recipe.cuisine}
              required
            />
          </div>
          <div className="col-md-3 p-3">
          
            <input
              type="text"
              id="photo"
              name="photo"
              className="form-control"
              placeholder="URL"
              onChange={handleChange}
              value={recipe.photo}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="row align-items-center pl-3">
        <div className="col-md-3 p-3">
          
          <textarea
            id="ingredients"
            name="ingredients"
            className="form-control"
            placeholder="Ingredients"
            onChange={handleChange}
            value={recipe.ingredients}
            required
          />
        </div>
        <div className="col-md-3 p-3">
          
          <textarea
            id="preparation"
            name="preparation"
            className="form-control"
            placeholder="Preparation"
            onChange={handleChange}
            value={recipe.preparation}
            required
          />
        </div>
      
        <div className="col-md-3">
          <button type="submit" className="btn btn-lg btn-primary btn-md-block">
            Create
          </button>
        </div>
      </div>
    </form>
  );

}

export default RecipeCreate;
