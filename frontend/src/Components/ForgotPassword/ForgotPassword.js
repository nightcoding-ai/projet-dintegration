import React, { Component } from "react";
import './ForgotPassword.css'

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Mot de passe oublié ?</h3>
                <p>Pour récupérer votre mot de passe, veuillez indiquer votre email. Vous recevrez par après un mail pour récupérer votre mot de passe ou le changer</p>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Indiquez votre email" />
                </div>


                <button type="submit" className="btn btn-dark btn-bg btn-block">Envoyer</button>
            </form>
        );
    }
}