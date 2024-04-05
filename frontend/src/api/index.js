/* Sends an axios request to the back end */
import axios from "axios";

const url = "http://localhost:8000"; 

export const getRecipes = () => axios.get(`${url}/get-recipes`);
export const postIngredient = (newIngredient) => axios.post(`${url}/add`, newIngredient)
