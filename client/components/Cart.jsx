import React from 'react'
import CartItem from './CartItem'
import Footer from './Footer'

const Cart = () => {
  return (
    <>
      <div className="cartBody">
        <div className="cartBodyInner">
          <h1>Kart</h1>

          <div className="cartDiv">
            <CartItem />
            <hr></hr>
            <CartItem />
            <hr></hr>
            <CartItem />
            <hr></hr>
            <CartItem />
          </div>

          <div className="cartfooter">
            <div className="keepShoppingButton">
              <button className="button">Keep Shopping</button>
            </div>
            <div className="totalPrice">{/* <h1>Total Price: {}</h1> */}</div>
            <div className="checkoutButton">
              <button className="button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart