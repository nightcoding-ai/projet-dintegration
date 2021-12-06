import React, { Component } from 'react'
import axios from 'axios';
import './ContactAdmin.css';

class ContactAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            object: "",
            message: "",
            response: "",
            status: true,
            hidden: true
        };
    }

    show = () => {
        this.setState((state) => {
            return {hidden: this.state.hidden ? false : true}
        });
    }

    verifyContact() {
        
    }

    handleSubmit() {

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
                                <td>
                                    <td class="td-message"><h4>Message : </h4><p>Voila mon problème, il est difficile pour moi de venir comme cela dabc cet état</p></td>
                                    <td><h4>Réponse : </h4><textarea id="text1"></textarea><button className="btn btn-primary" id="btn">Envoyer</button></td>
                                </td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ContactAdmin;