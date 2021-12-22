import React, { Component } from "react";
import AuthService from "../services/auth.service";
import '../Login/Login.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {}
    };
  }
  componentDidMount() {
    AuthService.getCurrentUser()
        .then((result) => {
            this.setState({
                currentUser: result.data,
            });
        });
  }
  disconnect() {
    AuthService.deleteCurrentUser()
      .then(() => {
        window.location.href = "/Login";
      })
  
  }
  delete() {
    AuthService.deleteUser()
      .then(() => {
       
        window.location.href = "/Articles";
      })
  }

  render() {
    const { currentUser } = this.state;
    return (
      <>
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.name}</strong>
          </h3>
        </header>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.mail}
        </p>
        <p>
          <strong>Role:</strong>{" "}
          {currentUser.role}
        </p>
        <p>
          <strong>Points client:</strong>{" "}
          {currentUser.points} 
        </p>
      </div>
      <div className="d-flex justify-content-around buttons">
        <button
                //type="submit"
                className="btn btn-dark btn-bg"
                id="Déconnexion"
                onClick={this.disconnect}
                >
                    Déconnexion
          </button>
          <button
                //type="submit"
                className="btn btn-dark btn-bg"
                id="Historique"
                onClick={this.disconnect}
                >
                    Historique des commandes
          </button>
          </div>
          <button
                //type="submit"
                className="btn btn-dark btn-bg"
                id="Suppression"
                onClick={this.delete}
                >
                    Supprimer mon compte
          </button>
        
      </>
    );
  }
}