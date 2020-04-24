import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import Cart from './Cart'
import FeaturedStrain from './FeaturedStrain'

const App = () => {
  return (
    <>
      <Header/>
      <Route path="/" component={Home} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/cart" component={Cart} />
      <Footer />
    </>
  )
}

export default App
