const recipesReducer = (recipes = [], action) => {
    switch (action.type) {
        case "FETCH_RECIPES":
            return action.payload;
        
        case "POST_RECIPE":
            return action.payload;
        default:
            return recipes;
        }
}

export default recipesReducer;

