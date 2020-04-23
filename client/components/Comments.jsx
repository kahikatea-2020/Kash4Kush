import React from 'react'
import CommentsList from './CommentsList'
import { connect } from 'react-redux'

class Comments extends React.Component {
  // this.state = {

  // }

  render () {
    return (
      <>
        <div className="commentsDiv">
          <imput />
          <CommentsList />
        </div>
      </>
    )
  }
}

export default connect()(Comments)
