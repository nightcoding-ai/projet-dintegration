import React, { Component } from 'react'
import axios from 'axios';
import './ContactAdmin.css';

class ContactAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< refs/remotes/origin/develop
            openItems: [],
            closedItems: [],
            hidden: true,
            isLoaded: false
=======
            id: 0,
            object: "",
            message: "",
            response: "",
            status: true,
            hidden: true
>>>>>>> Avancement contact user front + back mais pas fini
        };
    }

<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
    show = () => {
=======
    show() {
>>>>>>> Correction du state
=======
    show = () => {
>>>>>>> add specification but not finished
        this.setState((state) => {
            return {hidden: this.state.hidden ? false : true}
        });
    }

<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
=======
>>>>>>> Avancement contact user front + back mais pas fini
    verifyContact() {
        
    }

    handleSubmit() {

    }

<<<<<<< refs/remotes/origin/develop
    componentDidMount() {
        axios.get("http://localhost:5000/api/contact/open")
            .then((result) => {
                this.setState({
                    openItems: result.data,
                    isLoaded: true
                })
            })

        axios.get("http://localhost:5000/api/contact/closed")
        .then((result) => {
            this.setState({
                closedItems: result.data,
                isLoaded: true
            })
        })
    }

    handleChangeStatus = event => {
        let stat;
        if(event.target.value == "open") stat = true;
        else stat = false;
        let data = {status: stat};
        axios.put("http://localhost:5000/api/contact/status/" + event.target.id,
        data)
            .then(function(response) {
                console.log(response);
                window.location.reload(false);
            })
            .catch(function(err) {
                console.log(err.message);
            })
    }

    handleChange = x => {
        let data = {}
        axios.put("http://localhost:5000/api/contact/" + x.target.id,
        data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err.message);
            })
    }

    render() {
        const { openItems } = this.state;
        const { closedItems } = this.state;
        if (!this.state.isLoaded) {
            return <div>Chargement ... </div>;
        } else {
            return (
                <div>
                    <div id="openTable">
                        <h3>Requêtes ouvertes</h3>
                        <table className="table 5p">
                            <thead>
                                <tr>
                                    <th scope="col">Objet</th>
                                    <th scope="col">Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {openItems.map((request) => (
                                <tr>
                                    <td>
                                        <span className="float-start" id="textObjet">{request.subject}</span>
                                        <div >
                                            <button id="btnShow" className="float-end btn btn-dark text-right" onClick={this.show}>Plus..</button>
                                        </div>
                                    </td>
                                    <td id="statut">
                                        <select id={request._id} onChange={this.handleChangeStatus} className="form-select" aria-label="Default select example">
                                            <option className="open-select" selected id="openSelect" value="open">Ouvert</option>
                                            <option className="close-select" id="closeSelect" value="close">Fermé</option>
                                        </select>
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                    <div id="closeTable">
                    <h3>Requêtes fermées</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Objet</th>
                                    <th scope="col">Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                            {closedItems.map((request) => (
                                <tr>
                                    <td>
                                        <span className="float-start" id="textObjet">{request.subject}</span>
                                        <div >
                                            <button id="btnShow" className="float-end btn btn-dark text-right" onClick={this.show}>Plus..</button>
                                        </div>
                                    </td>
                                    <td id="statut">
                                        <select id={request._id} onChange={this.handleChangeStatus} className="form-select" aria-label="Default select example">
                                            <option className="open-select" id="openSelect" value="open">Ouvert</option>
                                            <option selected className="close-select" id="closeSelect" value="close">Fermé</option>
                                        </select>
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
=======
=======
>>>>>>> Avancement contact user front + back mais pas fini
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
>>>>>>> Correction du state
                </div>
            )
        }
    }
}

export default ContactAdmin;