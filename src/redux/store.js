import {createStore , compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import hitReducer from "./hitReducer";






export const store = createStore(hitReducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
