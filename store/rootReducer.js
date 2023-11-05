import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart'
import themeReducer from './theme'

const rootReducer = combineReducers({cartReducer,themeReducer })
console.log('root',rootReducer)
export default rootReducer