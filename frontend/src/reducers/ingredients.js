const ingredientsReducer = (ingredients = [], action) => {
    switch (action.type) {
        case "POST_INGREDIENTS":
            return action.payload;
        case "FETCH_INGREDIENTS":
            return action.payload;
        case "UPDATE_INGREDIENT":
            return action.payload;
        default:
            return ingredients;
        }
}

export default ingredientsReducer;

