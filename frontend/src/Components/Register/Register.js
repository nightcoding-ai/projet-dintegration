import React, { Component } from "react";
import './Register.css'

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Inscription</h3>

                <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" className="form-control" placeholder="Prénom" />
                </div>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Votre email" />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Votre mot de passe" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">En cliquant ici, vous acceptez notre <a href="/GPU">GPU</a> </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">S'inscrire</button>
                <p className="need-account text-right">
                    Vous avez déjà un compte ? Connectez-vous <a href="./Login">ici</a>
                </p>
            </form>
        );
    }
}