import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  renderUsers = () => {
    return this.props.users.map((user) => {
      return <li>{user.username}</li>;
    });
  };
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
        </ul>
        <p>Total User: {this.props.userCount}</p>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
