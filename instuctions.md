# Recipe CRUD app

* In this project, you will build a recipe tracking application. This application will allow a user to add new recipes, display a list of recipes and delete a recipe from the list by clicking a Delete button. You will also leverage Bootstrap to style the application.

* Screenshot 2024-03-13 at 1.49.55 PM.png

* This project has starter code you can use for the application. You will need to leverage your knowledge of React to make the application run as intended. You should also utilize Bootstrap to style the application. You do not need to install or include Bootstrap as it is already included.

### Note: 
* If downloading the assessment files to your local machine, make sure you're running Node v18 before you run npm install.

## Check which version you are running: node -v

* If needed, change the version to v18: nvm use v18
For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module.

## Specific instructions

* To complete this project, you will need to complete the following tasks. In each file there are TODO comments that will help remind you what to do.

* Load and display the data from src/data.js correctly. Each recipe within the src/data.js file should be shown on the page with all the appropriate fields displayed within the provided table. The recipe count should be updated to be equal to the current number of recipes. Additionally, there should be a "Delete Recipe" button for each listed recipe.

* Enable the "Delete Recipe" button to remove the recipe from the list. Clicking this button should remove the recipe from the list and should update the recipe count. For the tests to pass, make sure that the "Delete" button has delete as a name value (i.e., name="delete").

* Create a form for creating a new recipe. To create a recipe entry, your application will need to have a form with input fields for the name of the dish, the cuisine it belongs to, and a URL that points to a picture of the dish. Use <textarea> for the ingredients and preparation. For the tests to pass, use the following names for your inputs: <input name="name">, <input name="cuisine">, <input name="photo">, <textarea name="ingredients"> and <textarea name="preparation">.

* Enable the "Create" button to create a new recipe. A new recipe should be created and added to the end of the list when the form is properly filled out. The recipe count should also increase.

## Styling instructions

* Use Bootstrap to style your application. While you do not need to precisely match the mockup at the top of the instructions, you should aim to get as close as you can in terms of the project layout.

## Success criteria

### Functionality:

* User can create a recipe entry.
* User can read the list of recipes. The new recipe must be added to the end of the list of recipes.
* User can delete a recipe.
* Bootstrap is used to make the app look like the mockup.
* React code organization:
* Uses multiple components that play well together.
* Recipe data is contained in the state.
* General code organization:
* Minimal code duplication.