import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {stores} from './Home'


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  stores
})

export default createRootReducer
