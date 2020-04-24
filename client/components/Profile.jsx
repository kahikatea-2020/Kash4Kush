import React from 'react'
import MoreLikeThis from './MoreLikeThis'
import Comments from './Comments'

class Profile extends React.Component {
  getRandomStrainId = () => {
    let resultArr = []
    let min = Math.ceil(1)
    let max = Math.floor(2163)
    for (var i = 0; i < 4; i++) {
      resultArr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return resultArr
  }

  state = {
    strainId: this.props.match.params.id,
    moreStrainsArr: this.getRandomStrainId()
  }


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
          {this.state.moreStrainsArr.map(id => <MoreLikeThis key={id} strainId={id}/>)}
          <Comments strainId={this.state.strainId}/>
        </div>
      </>
    )
  }
}

export default Profile
