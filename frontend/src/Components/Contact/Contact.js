import React, { Component } from 'react'
import axios from 'axios';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    verifyContact(array) {
        if(!array[0] || !array[1] || !array[2]) {
            gid("error-msg").innerText = "Champ manquant !";
            return false;
        }
        else {
            gid("error-msg").innerText = "";
            return true
        }
    }

    getGid() {
        let mail, sub, msg;
        mail = gid("email").value;
        sub = gid("msg_subject").value;
        msg = gid("message").value;
        return [mail, sub, msg];
    }

    handleSubmit() {
        let data = this.getGid();
        if(this.verifyContact(data) == false) return false
        let mail, subject, message;
        mail = gid("email").value;
        subject = gid("msg_subject").value;
        message = gid("message").value;

        axios.post("http://localhost:5000/api/contact/",
        {mail: mail, subject: subject, message: message, status: true, response: ""})
            .then(function(response) { console.log(response) })
            .catch(function(err) { console.log(err)})
    }

    render() {
        return (
            <section class="Material-contact-section section-padding section-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                            <h1 class="section-title">Contactez-nous</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                            <p>Nos équipes travaillent du mieux qu'il peuvent afin de régler vos problèmes ou de répondre à vos questions.</p>

                            <div class="find-widget">
                            Entreprise:  <a href="">Bangoo</a>
                            </div>
                            <div class="find-widget">
                            Adresse: <a href="#">Rue du Bercaille 18, 1300 Wavre</a>
                            </div>
                            <div class="find-widget">
                                Téléphone:  <a href="">+32 471/28.21.70</a>
                            </div>
                        </div>
                        <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                                <div class="form-group label-floating">
                                    <label class="control-label" for="email">Email</label>
                                    <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"></input>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">Sujet</label>
                                    <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"></input>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group label-floating">
                                    <label for="message" class="control-label">Message</label>
                                    <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-submit mt-5">
                                    <button class="btn btn-primary" id="form-submit" onClick={this.handleSubmit}> Envoyer message</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"><p id="error-msg"></p></div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

<<<<<<< refs/remotes/origin/develop
function gid(id) {return document.getElementById(id);}

=======
>>>>>>> Change some css and js in contact page. And adding eslintcache to gitignore
export default Contact;
