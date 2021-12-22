import React, { Component } from "react";
import AuthService from "../services/auth.service";
import '../Profile/Profil.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      isLoaded: false
    };
  }
  componentDidMount() {
    AuthService.getCurrentUser()
        .then((result) => {
            this.setState({
                currentUser: result.data,
                isLoaded: true,
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
    console.log(currentUser.userOffers);
    if(!this.state.isLoaded){
      return (
        <div>chargement...</div>
      )
    }
    return (
      <div className="profil">
      <div className="container ">
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
        <p>
          <strong>Mes cadeaux</strong>{" "}
          <div>
          {currentUser.userOffers.map((offer) => (
            <div>
            <div>{offer.name}</div>
            <div>{offer.description}</div>
            </div>
          ))}
          </div>
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
        
      </div>
    );
  }
}