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

export const getIngredients = () => async (dispatch) => {
  try {
    const { data } = await api.getIngredients();
    dispatch({ type: "FETCH_INGREDIENTS", payload: data });
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};

export const updateIngredient = (updateIngredient) => async (dispatch) => {
  try {
    const { data } = await api.updateIngredient(updateIngredient);
    dispatch({ type: "UPDATE_INGREDIENT", payload: data });
  } catch (error) {
    console.log(error);
  }
};