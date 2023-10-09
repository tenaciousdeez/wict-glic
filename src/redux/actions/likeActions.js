export const incrementLikes = (dishId) => ({
    type: 'INCREMENT_LIKES',
    payload: { dishId },
});

export const decrementLikes = (dishId) => ({
    type: 'DECREMENT_LIKES',
    payload: { dishId },
});