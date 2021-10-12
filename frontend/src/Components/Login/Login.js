import React, { Component } from "react";
import './Login.css'

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Connexion</h3>

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
                        <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-bg btn-block">Se connecter</button>

                <p className="forpas-register text-right">
                    Mot de passe perdu ? Récupérer le <a href="./ForgotPassword">ici</a>
                </p>
                <p className="forpas-register text-right">
                    Pas encore de compte ? Inscrivez-vous <a href="./Register">ici</a>
                </p>
            </form>
        );
    }
}