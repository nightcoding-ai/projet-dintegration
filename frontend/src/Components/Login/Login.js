import React, { Component } from "react";
import './Login.css';
import axios from "axios";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
        };
    }
    
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    
    handleSubmit = e => {
    e.preventDefault();
    const { mail, password } = this.state;

    const user = {
      mail,
      password,
    };
    axios
      .post('http://localhost:5000/api/user/login', user)
      .then((res) => console.log('User Connected', res.data))
      .catch(err => {
        console.error(err);
      });
  };

    render() {
        return (
            <div className="container-fluid">
            <form className="">

                <h3>Connexion</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Votre email"
                    name="mail" 
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Votre mot de passe" 
                    name="password"
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</label>
                    </div>
                </div>

                <button 
                type="submit" 
                className="btn btn-dark btn-bg btn-block"
                onClick={this.handleSubmit}>
                    Se connecter
                </button>

                <p className="forpas-register text-right">
                    Mot de passe perdu ? Récupérer le <a href="./ForgotPassword">ici</a>
                </p>
                <p className="forpas-register text-right">
                    Pas encore de compte ? Inscrivez-vous <a href="./Register">ici</a>
                </p>
            </form>
            </div>
        );
    }
}