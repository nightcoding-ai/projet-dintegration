import React, { Component } from "react";
import './Login.css';
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Veuillez remplir ce champ!
        </div>
      );
    }
  };
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);   
        this.state = {
            mail: '',
            password: '',
            message: '',
        };
    }

    onChangeMail(e) {
        this.setState({
          mail: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({message: ""})
        this.form.validateAll();


        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.mail, this.state.password)
            .then(() => {
                //console.log(JSON.parse(localStorage.getItem('user')));
                this.props.history.push("/Profile");
                window.location.reload();
            })
      };
    };

    render() {

         return (
            <div className="container-fluid">
            <Form
            onSubmit={this.handleSubmit}
            ref={c => {
                this.form = c;
              }}>
                <h3>Connexion</h3>

                <div className="form-group">
                    <label>Email</label>
                    <Input
                    type="email"
                    className="form-control"
                    placeholder="Votre email"
                    name="mail"
                    value={this.state.mail}
                    onChange={this.onChangeMail}
                    validations={[required]}/>
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <Input type="password"
                    className="form-control"
                    placeholder="Votre mot de passe"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}/>
                </div>

                <input type="hidden" name="_token" ></input>
                <button
                className="btn btn-dark btn-bg btn-block login"
                >
                    Se connecter
                </button>
                <p className="forpas-register text-right">
                    Mot de passe perdu ? Récupérer le <a href="./ForgotPassword">ici</a>
                </p>
                <p className="forpas-register text-right">
                    Pas encore de compte ? Inscrivez-vous <a href="./Register">ici</a>
                </p>
                <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                        this.checkBtn = c;
                }}/>
            </Form>
            </div>
        );
    }
}