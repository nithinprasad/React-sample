import { combineReducers } from 'redux'
import reducer from './counterReducers';


const allReducers=combineReducers({
    counters: reducer
})

export default allReducers;