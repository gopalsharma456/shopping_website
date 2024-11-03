import {call,put, takeLatest} from "redux-saga/effects"

function* addToCartSaga(payload){
  yield put({
    type: "ADD_TO_CART",
    payload : payload
  })
}

export function* cartAddSagas(){
  yield takeLatest("SAGA_ADD_TO_CART", addToCartSaga)
}



function* deleteFromCartSaga(payload){
  yield put({
    type: "DELETE_FROM_CART",
    payload : payload
  })
}

export function* deleteItemSagas(){
  yield takeLatest("SAGA_DELETE_FROM_CART", deleteFromCartSaga)
}

