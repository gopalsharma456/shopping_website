import {call, put, takeLatest} from "redux-saga/effects"
import {searchProduct } from './productApi'

function* productList(action){
  const data = yield call(productData, action.payload)
  yield put({
    type: "CALL_PRODUCT_LIST",
    payload: data
  })
}

export function* sagaProductList(){
  yield takeLatest("SAGA_CALL_PRODUCT_LIST", productList)
}

function* searchProducts(action){
  const data = yield call(searchProduct, action.payload)
  yield put ({
    type: "SEARCH_PRODUCT_LIST",
    payload: data
  })
}

export function* sagaSearchProducts(){
  yield takeLatest("SAGA_SEARCH_PRODUCT_LIST", searchProducts)
}