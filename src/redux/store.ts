import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from 'redux-thunk';
import cartItems from "./reducers/cartItem";

const reducers = combineReducers({
  cartItems: cartItems
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store
