const addToCart = (payload) => {
  return ({
    type: "ADD_TO_CART",
    payload: {
      ...payload,
      quantity: 1,
    },
  });
};

const sagaAddToCart = (payload) => {
  return ({
    type: "SAGA_ADD_TO_CART",
    payload: payload,
  });
};

const deleteFromCart = (payload) => {
  return ({
    type: "DELETE_FROM_CART",
    payload: {
      ...payload,
      quantity: 1,
    },
  });
};

const sagaDeleteFromCart = (payload) => {
  return ({
    type: "SAGA_DELETE_FROM_CART",
    payload: payload,
  });
};


export default {addToCart, sagaAddToCart, deleteFromCart, sagaDeleteFromCart}