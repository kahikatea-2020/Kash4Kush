import React from 'react'
import MoreLikeThis from './MoreLikeThis'
import Comments from './Comments'
import Footer from './Footer'

class Profile extends React.Component {
  // this.state = {

  // }

  render () {
    return (
      <>
        <div className="profileBody">
          <div className="profileDiv">
            <div className="namePriceAddToCart">
              <h1>Strain Name</h1>
              <div className="priceAddToCart">
                <h1>Price</h1>
                <h1>Add To Cart</h1>
              </div>
              <div className="profileImage">{/* <img src={} /> */}</div>
            </div>

            <div className="flavEffect">
              <div className="effects">
                <h1>Effects</h1>

                <div className="profileEffects">
                  <div className="profileEffect">
                    <h3>Positive</h3>
                    <p>Dope as hell buzz</p>
                  </div>
                  <div className="profileEffect">
                    <h3>Negative</h3>
                    <p>Attracts cops</p>
                  </div>
                  <div className="profileEffect">
                    <h3>Medical</h3>
                    <p>Dope as hell medical buzz</p>
                  </div>
                </div>
              </div>

              <div className="profileFlavours">
                <h1>Flavours</h1>
                <div className="profileFlavour">
                  <p>Flavour 1</p>
                </div>
                <div className="profileFlavour">
                  <p>Flava 95.8</p>
                </div>
                <div className="profileFlavour">
                  <p>Flava flav</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="moreHR" />
        <div className="moreAndComments">
          <MoreLikeThis />
          <Comments />
        </div>
        <Footer />
      </>
    )
  }
}

export default Profile
