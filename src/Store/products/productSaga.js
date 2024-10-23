import {call, put, takeLatest} from "redux-saga/effects"

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