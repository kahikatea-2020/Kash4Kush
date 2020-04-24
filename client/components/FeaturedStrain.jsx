import React from 'react'
import { connect } from 'react-redux'

import { getWeedToState } from '../actions/index'

class FeaturedStrain extends React.Component {
    state = {
      strainId: 0
    }

    componentWillMount () {
      this.props.dispatch(getWeedToState(this.state.strainId))
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

const mapStateToProps = (state) => {
  console.log(state)

  return {
    strain: state.strain
  }
}

export default connect(mapStateToProps)(FeaturedStrain)
