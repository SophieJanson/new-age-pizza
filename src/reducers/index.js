import { combineReducers } from 'redux'
import reducer from './pizza'

export default combineReducers({
    pizza: reducer
})