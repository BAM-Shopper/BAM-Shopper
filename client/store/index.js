import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'
import orders from './orders'
import reviews from './reviews'
import selectedProduct from './singleProduct'
import selectedOrder from './singleOrder'
import categories from './categories'

const reducer = combineReducers({user, products, selectedProduct, selectedOrder, categories, orders, reviews})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
