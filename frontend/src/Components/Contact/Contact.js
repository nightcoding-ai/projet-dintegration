import React, { Component } from 'react'
import axios from 'axios';
import './Contact.css';
import {Button} from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
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
                            Entreprise:  <a href="https://hostriver.ro">Bangoo</a>
                            </div>
                            <div class="find-widget">
                            Adresse: <a href="#">Rue du Bercaille 18, 1300 Wavre</a>
                            </div>
                            <div class="find-widget">
                                Téléphone:  <a href="">+32 471/28.21.70</a>
                            </div>
                        </div>
                        <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                            <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                                <div class="form-group label-floating">
                                <label class="control-label" for="name">Nom</label>
                                <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name"></input>
                                <div class="help-block with-errors"></div>
                                </div>
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
                                    <button class="btn btn-primary" type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i> Envoyer message</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;