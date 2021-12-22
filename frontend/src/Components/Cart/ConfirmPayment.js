import React, { Component } from "react";
import '../../Components/Home/Home.css'

export default class ConfirmPayment extends Component {

    render() {
        return (
            <>
                <div className='home'>
                    <div className='container-success  container'>
                        <h1 id="h1">Commande acceptée</h1>
                    </div>
                </div>

            </>
        )
    }
}