import React from "react"
import Footer from './Footer'

const CartItem = () => {
  return (
    <>
      <div className="cartItemDiv">

          <div className="cartItemImage">
            {/* <img src={} /> */}
          </div>

          <div className="cartItemName">
            <h1>Name</h1>
          </div>

          <div className="cartItemQuantity">
            <div className="quantityNumber">
              <input />
            </div>
            <div className="quantityWord">
              <p>Quantity</p>
            </div>
          </div>

            <div className="cartItemPrice">
              <div className="priceNumber">
                <h3>$4.20</h3>
              </div>
              <div className="priceWord">
                <p>Price</p>
              </div>
            </div>

 
          <div className="removeButton">
            <button className="button">Remove</button>
          </div>
      </div>
    </>
  );
};

export default CartItem;
