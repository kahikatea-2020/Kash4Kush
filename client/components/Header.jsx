import React from 'react'

const Header = () => {
  return (
<>
<div className="Header">
  <img className="logo" src="/images/logo.png"/>

  <div className="searchBarDiv">
    <input className="searchBar"/><button className="searchButton">Go</button>
  </div>

  <div className="navButtons">
    <div className="kribButton">
      <h1 className="navButtonText">Krib</h1>
    </div>

    <div className="kartButton">
      <h1 className="navButtonText">Kart</h1>
    </div>
  </div>

</div>

</>

  )
}

export default Header
