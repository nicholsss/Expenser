import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
    user:loginReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store