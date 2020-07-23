import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  renderUsers = () => {
    return this.props.users.map(user => {
      return <li key={user.username}>{user.username} - {user.hometown}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
          Count: {this.props.usersCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users,
          usersCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
