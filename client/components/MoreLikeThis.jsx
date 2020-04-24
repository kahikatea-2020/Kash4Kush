import React from 'react'
import FeaturedStrain from './FeaturedStrain'

class MoreLikeThis extends React.Component {
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
