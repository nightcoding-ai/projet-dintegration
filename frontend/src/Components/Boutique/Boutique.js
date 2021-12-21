import React, { Component } from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom';
import './Boutique.css'
import {Button} from 'react-bootstrap'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Boutique extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/offers')
            .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
        });
    }
    render() {
        const { items } = this.state;

        const notify = (e) =>{
        console.log(e.currentTarget.id)
        toast('L\'offre  '+e.currentTarget.name+' a été ajoutée à votre compte !', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: false,
                                        draggable: true,
                                        progress: undefined,
                                        });
                                        }

        if (!this.state.isLoaded) {
          return <div>Chargement ... </div>;
        } else {
          return (
            <div class="container py-5 my-5">
                <div className="mb-5">
                    <h1 className='title'>Notre boutique</h1>
                </div>
                <div class="row">
                    <div class="col-lg-7 mx-auto">
                    <ul className="list-group shadow">
                    {items.map((offer) => (
                        <li className="list-group-item">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h3 className="mt-4 font-weight-bold mb-2">{offer.name}</h3>
                                    <p className="text-muted">{offer.description}</p>
                                    <h5 className="font-weight-bold my-2">{offer.price} Points</h5>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <div className='box "my-3'>
                                    </div>
                                    <div className="my-3">
                                        <Button type="button" name={offer.name} id={offer._id} variant="btn btn-outline-success"  onClick={notify}>Ajouter au compte</Button>                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}
                    </ul>
                    </div>
                </div>
            </div>
          );
        }
    }
}

export default Boutique;


