import { combineReducers } from 'redux';
import likeReducer from './likeReducer';
import saveReducer from './saveReducer';

const rootReducer = combineReducers({
    likes: likeReducer,
    saves: saveReducer,
});

export default rootReducer;