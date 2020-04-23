import React from 'react'
import FeaturedStrain from './FeaturedStrain'

const MoreLikeThis = () => {
  return(
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

export default MoreLikeThis