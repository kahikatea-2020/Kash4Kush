import React from 'react'
import FeaturedStrain from './FeaturedStrain'

class MoreLikeThis extends React.Component {
  // this.state = {

  // }

  //   function getRandomStrainId(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  // getRandomStrainId(1, 2163)

  render () {
    return (
      <>
        <div className="moreLikeThisDiv">
          <div className='homeFeatureTwo'>
            <FeaturedStrain />
            <FeaturedStrain />
          </div>
          <div className='homeFeatureTwo'>
            <FeaturedStrain />
            <FeaturedStrain />
          </div>
        </div>
      </>
    )
  }
}

export default MoreLikeThis
