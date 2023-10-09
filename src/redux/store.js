import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Redux middleware for handling asynchronous actions
import rootReducer from './reducers'; // Your root reducer (to be created in Step 4)

const middleware = [thunk];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;