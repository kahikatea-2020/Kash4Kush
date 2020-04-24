import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component {
  // this.state = {

  // }

  render () {
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
      </>
    )
  }
}

export default Cart
