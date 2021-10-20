import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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
        </div>
    </div>
  );
}

export default Footer;