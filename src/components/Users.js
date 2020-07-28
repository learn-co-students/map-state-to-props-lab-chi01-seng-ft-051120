import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {


  showUsers = () => {
    return this.props.users.map(user => {
      return (
        <li>{user.username}</li>
      )
    })
  }

  showTotalUserNumber = () => {
    return <p>Total Users: {this.props.users.length}</p>
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.showUsers()}
          {this.showTotalUserNumber()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {users: state.users}
} 


export default connect(mapStateToProps)(Users)
