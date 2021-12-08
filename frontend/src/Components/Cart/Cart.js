import React, { Component } from 'react'
import './Cart.css'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/products')
            .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
        });
    }
    deleteArticle = (e) => {
        alert("l'id du produit : "+ e.currentTarget.id);
    }
    render() {
        const { items } = this.state;
        const notifyBasket = (e) =>toast.error('L\'article : '+e.currentTarget.name+' a été supprimé du panier !', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: false,
                                        draggable: true,
                                        progress: undefined,

                                        });
        if (!this.state.isLoaded) {
          return <div>Chargement ... </div>;
        } else {
            return (
                <div class="container py-5 my-5">
                    <div className="mb-5">
                        <h1 className='title'>Panier</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 mx-auto">
                        <ul className="list-group shadow">
                        {items.map((product) => (
                            <li className="list-group-item">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h3 className="mt-4 font-weight-bold mb-2">{product.name}</h3>
                                        <p className="text-muted">{product.description}</p>
                                        <p className="text-muted">Quantité : 1</p>
                                        <h5 className="font-weight-bold my-2">{product.price}€</h5>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                        <div className='box "my-3'>
                                            <img src={product.image} alt={product.name} width="150" className='picture'/>
                                        </div>
                                        <div className="my-3">
                                             <Button type="button" name={product.name} id={product._id} variant="btn btn-outline-danger"  onClick={notifyBasket}>Supprimer</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        ))}
                        </ul>
                        </div>
                    </div>
                </div>

            )
        }
    }
}
export default Cart;
