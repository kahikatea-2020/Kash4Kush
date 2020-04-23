import React from 'react'

class FeaturedStrain extends React.Component {
  // this.state = {

  // }

  //   function getRandomStrain (min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  // getRandomStrain(1, 2163)

  render () {
    return (
      <>
        <div className="featuredStrainDiv">
          <div className="featuredStrainImage">
            {/* <img src={} /> */}
          </div>
          <h1 className="strainName">Strain Name</h1>
        </div>
      </>
    )
  }
}

export default FeaturedStrain
