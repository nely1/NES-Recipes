/* Sends an axios request to the back end */
import axios from "axios";

const url = "http://localhost:8000"; 

export const getIngredients = () => axios.get(`${url}/get-ingredients`);

export const getRecipes = () => axios.get(`${url}/get-recipes`);

export const updateIngredient = (updateIngredient) => axios.post(`${url}/update-ingredient`, updateIngredient);

export const postIngredient = (newIngredient) => axios.post(`${url}/add-ingredient`, newIngredient)

export const postRecipes = (recipe) => axios.post(`${url}/post-recipe`, recipe);

