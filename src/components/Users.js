import React, { Component } from 'react';
import { connect } from "react-redux";
class Users extends Component {

  renderAllUsers = () => {
    return this.props.users.map((user) => {
      return <li>{user.username}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {this.renderAllUsers()}
        </ul>
        <p>All Users: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
