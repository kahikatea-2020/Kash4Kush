import React from 'react'
import FeaturedStrain from './FeaturedStrain'

class Home extends React.Component {
  getRandomStrainId = () => {
    let resultArr = []
    let min = Math.ceil(1)
    let max = Math.floor(2163)
    for (var i = 0; i < 4; i++) {
      resultArr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    console.log(resultArr)
    return resultArr
  }

  state = {
    strainsArr1: this.getRandomStrainId(),
    strainsArr2: this.getRandomStrainId(),
    strainsArr3: this.getRandomStrainId(),
    strainsArr4: this.getRandomStrainId(),
    strainsArr5: this.getRandomStrainId(),
    strainsArr6: this.getRandomStrainId(),
    strainsArr7: this.getRandomStrainId(),
    strainsArr8: this.getRandomStrainId(),
    strainsArr9: this.getRandomStrainId(),
    strainsArr10: this.getRandomStrainId(),
  }

  render () {
    return (
      <>
      <div className="homeDiv">
        <div className = "homeFeature" >
          {this.state.strainsArr1.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr2.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr3.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr4.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr5.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr6.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr7.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr8.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr9.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
        <div className = "homeFeature" >
          {this.state.strainsArr10.map(strain => (
            <FeaturedStrain key={strain.id} strainId={strain.id} />
          ))}
        </div>
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
