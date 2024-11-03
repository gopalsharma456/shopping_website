import { call, put, takeLatest } from "redux-saga/effects";

function* addToWishListSaga(payload){
  yield put({
    type: "ADD_TO_WISHLIST",
    payload
  })
}

export function* sagasAddToWishList(){
  yield takeLatest("SAGA_ADD_TO_WISHLIST", addToWishListSaga)
}

function* deleteFromWishListSaga(payload){
  yield put({
    type: "REMOVE_FROM_WISHLIST",
    payload
  })
}

export function* sagasDeleteFromWishList(){
  yield takeLatest("SAGA_REMOVE_FROM_WISHLIST", deleteFromWishListSaga)
}

