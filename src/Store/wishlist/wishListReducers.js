const loadWishlistFromLocalStorage = () => {
  try {
    const serializedWishlist = localStorage.getItem("wishlist");
    if (serializedWishlist === null) {
      return [];
    } else {
      return JSON.parse(serializedWishlist);
    }
  } catch (err) {
    console.error("Error loading cart from local storage", err);
    return [];
  }
};

const saveWishlistToLocalStorage = (wishlist) => {
  try {
    const serializedWishlist = JSON.stringify(wishlist);
    localStorage.setItem("wishlist", serializedWishlist);
  } catch (err) {
    console.error("Error saving cart from local storage", err);
  }
};

const initialState = {
  wishlistKey: loadWishlistFromLocalStorage(),
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const itemExists = state.wishlistKey.some(
        (item) => item.id == action.payload.id
      );
      const updateWishlist = itemExists
        ? [...state.wishlistKey]
        : [...state.wishlistKey, action.payload];
      saveWishlistToLocalStorage(updateWishlist);
      return {
        ...state,
        wishlistKey: updateWishlist,
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      const updatedWishlist = state.wishlistKey.filter(
        (item) => item.id !== action.payload
      );
      saveWishlistToLocalStorage(updatedWishlist);
      return {
        ...state,
        wishlistKey: updatedWishlist,
      };
    }

    default:
      return state;
  }
};

export default wishListReducer;
