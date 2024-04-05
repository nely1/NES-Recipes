/* The following are the API for the ingredients page */
import * as api from "../api";

export const postIngredient = (newIngredient) => async (dispatch) => {
  try {
    const { data } = await api.postIngredient(newIngredient);
    dispatch({ type: "POST_INGREDIENT", payload: data });
  } catch (error) {
    console.log(error);
  }
};