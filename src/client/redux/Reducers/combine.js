
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './auth-reducers';



let reducers = combineReducers({
    auth: AuthReducer,
    form: formReducer
})

export default reducers