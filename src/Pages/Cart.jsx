// src/pages/Cart.js
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { nanoid } from "nanoid/non-secure";
// import { removeFromCart } from "../store/actions/cartAction";
import './Cart.css'


const Cart = (props) => {
  let {cart, removeFromCart} = props;

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div>

      {cart.length === 0 ? (<h1>Your cart is empty.</h1>) 
      : 
      (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                <div>
                  <strong>{item.title}</strong>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
            
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => alert("Proceeding to checkout...")}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

// export default Cart;
const mapStateToProps = (state) => {
  return {
    // cart: state.cartReducer.cart,
    cart : []
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // removeFromCart : removeFromCart
    
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
