const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return [];
    } else {
      return JSON.parse(serializedCart);
    }
  } catch (err) {
    console.error("Error loading cart from local storage", err);
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    console.error("Error saving cart from local storage", err);
  }
};

const initialState = {
  cart: loadCartFromLocalStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );
      const updatedCart = itemExists
        ? [...state.cart]
        : [...state.cart, action.payload];
      saveCartToLocalStorage(updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "DELETE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      saveCartToLocalStorage(updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
