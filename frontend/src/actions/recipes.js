/* The following are the API for the recipe page, contains action calls for fetching, updating recipes */
import * as api from "../api";

export const getRecipes= () => async (dispatch) => {
  try {
    const { data } = await api.getRecipes();
    dispatch({ type: "FETCH_RECIPES", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const postRecipes = (name, instructions, selectedFile, ingredients) => async (dispatch) => {
  try {
    const recipeObject = {name: name, instructions: instructions, selectedFile: selectedFile, ingredients: ingredients};
    await api.postRecipes(recipeObject);

  }
  catch (error) {
    console.log(error.message);
    
  }
}