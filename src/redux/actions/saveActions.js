export const addToSaved = (dishId) => ({
    type: 'ADD_TO_SAVED',
    payload: { dishId },
});

export const removeFromSaved = (dishId) => ({
    type: 'REMOVE_FROM_SAVED',
    payload: { dishId },
});