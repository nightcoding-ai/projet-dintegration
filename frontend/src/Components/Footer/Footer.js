import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer-container'>
        <div id="contentFooter">
            <div id="legalMentions">
                <Link to='/GPU'>
                    Mentions légales
                </Link>
            </div>
            <div id="contact">
                <Link to='/Contact'>
                    Nous contacter
                </Link>
            </div>
            <div id="Boutique">
                <Link to='/Boutique'>
                    Offres
                </Link>
            </div>
            <div id="Vendeurs">
                <Link to='/Vendeurs'>
                    Vendeurs
                </Link>
            </div>

            <div id="Connexion">
                <Link to='/Login'>
                    Se connecter
                </Link>
            </div>
        </div>
        <div className="content-footer">
        <div id="Youtube" class="social-container">
                <a  href="https://www.youtube.com/channel/UC68ss1nWAGTLxX1F334xnLw" 
                    target="_blank" rel='noreferrer'
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="1x" />
                </a>
            </div>
            <div id="Facebook" class="social-container">
                <a href="https://www.facebook.com/Bangoo-SRL-112043194595183" 
                    target="_blank" rel='noreferrer'
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
            </div>
            <div id="Google" class="social-container">
                <a href="/"
                    className="google social">
                    <FontAwesomeIcon icon={faGoogle} size="1x" />
                </a>
            </div>
            <div id="Instagram" class="social-container">
                <a href="https://www.instagram.com/bangoosrl/"
                    className="google social">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
            </div>
        </div>
    </div>
  );
}

export default Footer;