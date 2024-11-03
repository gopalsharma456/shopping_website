const addToWishList = (payload) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload,
  };
};

const sagaAddToWishList = (payload) =>{
  return ({
    type: 'SAGA_ADD_TO_WISHLIST',
    payload
  })
}


const removeFromWishList = (id) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: id,
  };
};

const sagaRemoveFromWishList = (payload) => {
  return {
    type: "SAGA_REMOVE_FROM_WISHLIST",
    payload
  }
}

export { addToWishList, sagaAddToWishList, removeFromWishList, sagaRemoveFromWishList };
