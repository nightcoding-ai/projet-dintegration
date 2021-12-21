import React, { Component } from "react";
import './Register.css';
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
export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            mail: '',
            password: '',
            password2: '',
            errorMessage: '',
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


  handleSubmit = e => {
    e.preventDefault();
    this.form.validateAll();
    if (this.state.password !== this.state.password2){
        this.setState({errorMessage:"Veuillez entrer le même mot de passe"})
    }
    else if (this.checkBtn.context._errors.length === 0) {
        AuthService.register(this.state.name, this.state.mail, this.state.password)
        .then(() => {
            this.props.history.push("/Login");
            window.location.reload();
        })
        .catch((err) =>{
            if (err.response) {
                //console.log(err.response.data.msg);
                this.setState({errorMessage:err.response.data.msg})
              }        
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
                <h3>Inscription</h3>

                <div className="form-group">
                    <label>Nom</label>
                    <Input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"

                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    validations={[required]}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <Input
                    type="email"
                    className="form-control"

                    placeholder="Votre email"
                    name="mail"
                    value={this.state.mail}
                    onChange={this.handleInputChange}
                    validations={[required]}/>
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <Input type="password"
                    className="form-control"
                    placeholder="Votre mot de passe"

                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    validations={[required]}/>
                </div>
                <div className="form-group">
                    <label>Confirmer votre mot de passe</label>
                    <Input type="password"
                    className="form-control"
                    placeholder="Votre mot de passe"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.handleInputChange}
                    validations={[required]}/>
                    { this.state.errorMessage &&<p className="error"> { this.state.errorMessage } </p> }
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <Input type="checkbox" className="custom-control-input" id="customCheck1" required/>
                        <label className="custom-control-label" htmlFor="customCheck1">En cliquant ici, vous acceptez notre <a href="/GPU">GPU</a> </label>
                    </div>
                </div>
                <input type="hidden" name="_token" ></input>

                <button 

                className="btn btn-dark btn-lg btn-block register">
                    S'inscrire
                </button>

                <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                        this.checkBtn = c;
                }}/>
            </Form>
            <p className="need-account text-right">
                Vous avez déjà un compte ? Connectez-vous <a href="./Login">ici</a>
            </p>
            </div>
        );
    }
}