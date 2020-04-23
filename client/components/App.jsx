import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import Cart from './Cart'

class App extends React.Component {
//   this.state = {

  // }

  render () {
    return (
      <>
            <Header />
            <Home />
            {/* <Profile /> */}
            {/* <Cart /> */}
            <Footer />
      </>
    )
  }
}

export default App