
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/combine';
import thunkMiddleware from 'redux-thunk';




let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;