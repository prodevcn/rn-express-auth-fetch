import {combineReducers} from 'redux'
import authReducer from './auth'
import userReducer from './user'
import productReducer from './product'

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
})
