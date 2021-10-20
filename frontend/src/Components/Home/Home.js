import React, { Component } from 'react';
import './Home.css';
import logo from '../../img/Bangoo.png';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='home'>
                    <div className='hello'>Bienvenue sur <img src={logo} alt='logo'></img> </div>
                </div>

            </>
        )
    }
}
