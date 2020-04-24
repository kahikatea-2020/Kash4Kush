import React from 'react'
import FeaturedStrain from './FeaturedStrain'
import { Link } from 'react-router-dom'

class Home extends React.Component {
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
    strainsArr1: this.getRandomStrainId(),
    strainsArr2: this.getRandomStrainId(),
    strainsArr3: this.getRandomStrainId(),
    strainsArr4: this.getRandomStrainId()
  }

  render () {
    return (
      <>
        <div className="homeDiv">
          <div className="homeFeature" >
            {this.state.strainsArr1.map(strain => (
              <Link to={`/profile/${strain}`}><FeaturedStrain key={strain} strainId={strain} /></Link>
            ))}
          </div>
          <div className="homeFeature" >
            {this.state.strainsArr2.map(strain => (
              <Link to={`/profile/${strain}`}><FeaturedStrain key={strain} strainId={strain} /></Link>
            ))}
          </div>
          <div className="homeFeature" >
            {this.state.strainsArr3.map(strain => (
              <Link to={`/profile/${strain}`}><FeaturedStrain key={strain} strainId={strain} /></Link>
            ))}
          </div>
          <div className="homeFeature" >
            {this.state.strainsArr4.map(strain => (
              <Link to={`/profile/${strain}`}><FeaturedStrain key={strain} strainId={strain} /></Link>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Home
