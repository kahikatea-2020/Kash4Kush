import React from 'react'
import FeaturedStrain from './FeaturedStrain'

class Home extends React.Component {
  state = {
    strainsArr: []
  }

  getRandomStrainId = () => {
    for (var i = 0; 1 < 43; i++) {
      var min = Math.ceil(1)
      var max = Math.floor(2163)
      const result = Math.floor(Math.random() * (max - min + 1)) + min
      let resultArr = this.state.strainsArr
      resultArr.push(result)
      i++
      this.setState({ strainsArr: resultArr })
      console.log(this.state.strainsArr)
    }
  }

  render () {
    return (
      <>
        <div className="homeDiv">
          {this.state.strainsArr.map(strain => {
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          })}
        </div>
      </>
    )
  }
}

export default Home

{ /* < div className = "homeFeature" >
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
          </div >
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeature">
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
    <FeaturedStrain />
  </div>
  <div className="homeFeatureTwo">
    <FeaturedStrain />
    <FeaturedStrain />
  </div>  */ }
