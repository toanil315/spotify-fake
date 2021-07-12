import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import LoadingReducer from './reducer/LoadingReducer';
import UserReducer from './reducer/UserReducer';

const rootReducer = combineReducers({
    LoadingReducer,
    UserReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));