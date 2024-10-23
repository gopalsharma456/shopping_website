import { all } from "redux-saga/effects";

import { cartAddSagas, deleteItemSagas } from "./cart/cartSaga";
import { sagaProductList } from "./products/productSaga";

function* rootSaga() {
  yield all([sagaProductList(), cartAddSagas(), deleteItemSagas()]);
}

export default rootSaga;
