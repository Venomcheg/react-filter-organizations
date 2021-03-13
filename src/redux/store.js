import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {itemsReducer} from './reducers/itemsReducer'
import {modalsReducer} from './reducers/modalsReducer'
import {filterReducer} from "./reducers/filterReducer";
import thunk from "redux-thunk";
const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(
  {
    itemsReducer,
    modalsReducer,
    filterReducer
  }
),
  initialState,
  composeEnhancers(applyMiddleware(thunk)))
export default store