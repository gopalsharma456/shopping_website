import { combineReducers } from "redux";

import cartReducers from "./cart/cartReducers";
import productReducers from "./products/productReducers";
import wishListReducer from "./wishlist/wishListReducers";

const rootReducer = combineReducers({
  cartKey: cartReducers,
  wishlistKey : wishListReducer,
  // productKey: productReducers
});

export default rootReducer;
