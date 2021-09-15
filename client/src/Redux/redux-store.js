import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import productReducer from './productReducer';

let reducers = combineReducers({
    productPage: productReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store; 