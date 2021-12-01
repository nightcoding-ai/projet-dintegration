import React, { Component } from "react";
import AuthService from "../Login/AuthService";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.user.name}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.user._id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.user.mail}
        </p>
      </div>
    );
  }
}