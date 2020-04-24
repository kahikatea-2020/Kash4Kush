import React from 'react'
import { connect } from 'react-redux'

import { getWeedToState } from '../actions/index'

class FeaturedStrain extends React.Component {
  componentDidMount () {
    this.props.dispatch(getWeedToState(this.props.strainId))
  }

  render () {
    const { strainId } = this.props
    return (
      <>
        <div className="featuredStrainDiv">
          <div className="featuredStrainImage">
            <img src='https://images.unsplash.com/photo-1533577059201-70fbca82b2a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' /> 
          </div>
          <h1 className="strainName">{strainId}</h1>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    strains: state.strain
  }
}

export default connect(mapStateToProps)(FeaturedStrain)
