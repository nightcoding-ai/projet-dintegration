import React, { Component } from "react";
import './Register.css';
import axios from 'axios';
export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
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
    const { name, mail, password } = this.state;

    const user = {
      name,
      mail,
      password,
    };
    console.log(user);
    axios
      .post('http://localhost:5000/api/user/register', user)
      .then(() => console.log('User Created'))
      .catch(err => {
        console.error(err);
      });
  };
    
    render() {
        return (
            <form>
                <h3>Inscription</h3>

                <div className="form-group">
                    <label>Nom</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    placeholder="Nom"
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    name="mail"
                    placeholder="Votre email"
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    placeholder="Votre mot de passe"
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">En cliquant ici, vous acceptez notre <a href="/GPU">GPU</a> </label>
                    </div>
                </div>

                <button 
                type="submit" 
                onClick={this.handleSubmit} 
                className="btn btn-dark btn-lg btn-block register">
                    S'inscrire
                </button>
                <p className="need-account text-right">
                    Vous avez déjà un compte ? Connectez-vous <a href="./Login">ici</a>
                </p>
            </form>
        );
    }
}