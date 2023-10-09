const initialState = {
    // You can initialize the state as needed
    // For example, you might have an array of dish IDs that represent saved dishes.
    savedDishes: [],
};

const saveReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_SAVED':
            const { dishId: addSavedDishId } = action.payload;
            return {
                ...state,
                savedDishes: [...state.savedDishes, addSavedDishId],
            };
        case 'REMOVE_FROM_SAVED':
            const { dishId: removeSavedDishId } = action.payload;
            return {
                ...state,
                savedDishes: state.savedDishes.filter((id) => id !== removeSavedDishId),
            };
        default:
            return state;
    }
};

export default saveReducer;