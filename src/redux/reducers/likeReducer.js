const initialState = {
    dishLikes: {},
};

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const { dishId: incrementDishId } = action.payload;
            return {
                ...state,
                dishLikes: {
                    ...state.dishLikes,
                    [incrementDishId]: (state.dishLikes[incrementDishId] || 0) + 1,
                },
            };
        case 'DECREMENT_LIKES':
            const { dishId: decrementDishId } = action.payload;
            return {
                ...state,
                dishLikes: {
                    ...state.dishLikes,
                    [decrementDishId]: Math.max((state.dishLikes[decrementDishId] || 0) - 1, 0),
                },
            };
        default:
            return state;
    }
};

export default likeReducer;