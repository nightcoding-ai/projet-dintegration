import React, { Component } from "react";
import AuthService from "../Login/AuthService";
import '../Login/Login.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  disconnect() {
    localStorage.clear()
    window.location.href = "/";
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
          {currentUser.accessToken.substring(0, 20)} ...{" "}}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.user._id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.user.mail}
        </p>
         <button
                //type="submit"
                className="btn btn-dark btn-bg"
                id="Déconnexion"
                onClick={this.disconnect}
                >
                    Déconnexion
                </button>
      </div>
    );
  }
}