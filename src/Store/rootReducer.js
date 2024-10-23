import { combineReducers } from "redux";

import cartReducers from "./cart/cartReducers";
import productReducers from "./products/productReducers";

const rootReducer = combineReducers({
  // cartKey: cartReducers,
  product: productReducers,
});

export default rootReducer;
