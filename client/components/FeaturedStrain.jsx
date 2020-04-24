import React from 'react'
import { connect } from 'react-redux'

class FeaturedStrain extends React.Component {
    state = {
      strainId: 0
    }

    getRandomStrainId = () => {
      var min = Math.ceil(1)
      var max = Math.floor(2163)
      const result = Math.floor(Math.random() * (max - min + 1)) + min
      this.setState({ strainId: result })
    }

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

// const mapStateToProps = (state) => {
//   return {

//   }
// }

export default connect(mapStateToProps)(FeaturedStrain)
