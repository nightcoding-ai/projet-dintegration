import React, { Component } from 'react'
import axios from 'axios';
import './ContactAdmin.css';

class ContactAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        };
    }

    show = () => {
        this.setState((state) => {
            return {hidden: this.state.hidden ? false : true}
        });
    }

    render() {
        return (
            <div>
                <div id="openTable">
                    <h3>Requêtes ouvertes</h3>
                    <table className="table 5p">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Objet</th>
                                <th scope="col">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <span className="float-start" id="textObjet">Mark</span>
                                    <div >
                                        <button id="btnShow" className="float-end btn btn-dark text-right" onClick={this.show}>Plus..</button>
                                    </div>
                                </td>
                                <td id="statut">
                                    <select className="form-select" aria-label="Default select example">
                                        <option className="open-select" selected id="openSelect" value="open">Ouvert</option>
                                        <option   className="close-select" id="closeSelect" value="close">Fermé</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className={this.state.hidden ? "d-none" : "d-default"} id="table1">
                                <td></td>
                                <td><textarea id="text1"></textarea><button className="btn btn-primary" id="btn">Envoyer</button></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="closeTable">
                <h3>Requêtes fermées</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Objet</th>
                                <th scope="col">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td id="statut">
                                    <select class="form-select" aria-label="Default select example">
                                        <option id="openSelect" value="open">Ouvert</option>
                                        <option selected id="closeSelect" value="close">Fermé</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ContactAdmin;