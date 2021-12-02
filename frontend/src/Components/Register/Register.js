import React, { Component } from "react";
import './Register.css';
//import axios from 'axios';
import AuthService from "../Login/AuthService";
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

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            name: '',
            mail: '',
            password: '',
            message: '',
        };
    }
    
    onChangeName(e) {
        this.setState({
          name: e.target.value
        });
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
                AuthService.register(this.state.name, this.state.mail, this.state.password)
                .then(() => {
                    console.log('User Created');
                })
                .catch(err => {
                    console.error(err);
                });
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
                    <h3>Inscription</h3>

                    <div className="form-group">
                        <label>Nom</label>
                        <Input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nom"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        validations={[required]}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <Input
                        type="mail"
                        className="form-control"
                        name="mail"
                        placeholder="Votre email"
                        value={this.state.mail}
                        onChange={this.onChangeMail}
                        validations={[required]}/>
                    </div>

                    <div className="form-group">
                        <label>Mot de passe</label>
                        <Input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Votre mot de passe"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required]}/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">En cliquant ici, vous acceptez notre <a href="/GPU">GPU</a> </label>
                        </div>
                    </div>
                    <input type="hidden" name="_token" ></input>
                    <button className="btn btn-dark btn-lg btn-block">S'inscrire</button>
                    <p className="need-account text-right">
                        Vous avez déjà un compte ? Connectez-vous <a href="./Login">ici</a>
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