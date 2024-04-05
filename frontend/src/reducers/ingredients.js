const ingredientsReducer = (ingredients = [], action) => {
    switch (action.type) {
        case "POST_INGREDIENTS":
            return action.payload;
        default:
            return ingredients;
        }
}

export default ingredientsReducer;

