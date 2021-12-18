import React, { Component } from 'react'
import './Cart.css'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/cart/shopping-cart',{
            withCredentials:true,
            })
            .then((result) => {
                console.log(result)
            this.setState({
                items: result.data,
                isLoaded:true
            });
        });
    }
    cleanUp(){
        axios.get('http://localhost:5000/api/cart/purge',{
            withCredentials:true,
            }
        )
        window.location.reload(false);
    }
    deleteArticle = (e) => {
        console.log(e.currentTarget.id)
        axios.get('http://localhost:5000/api/cart/reduce/'+e.currentTarget.id, {
            withCredentials:true
        })
        window.location.reload(false);
    }
    render() {
        const { items } = this.state;
        console.log(items)
        const notifyBasket = (e) =>toast.error('L\'article : '+e.currentTarget.name+' a été supprimé du panier !', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: false,
                                        draggable: true,
                                        progress: undefined,
                                        });
            if(!this.state.isLoaded || items.products == null || items.products.length === 0){
                return(
                    <div className="cart">
                    <div class="py-5">
                            <div class="container px-4 px-lg-5 mb-5">
                            <div class="row">
                            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col" class="border-0 bg-light">
                                        <div class="p-2 px-3 text-uppercase">Produit</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Prix</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Quantité</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Supprimer</div>
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                                <h1>Votre panier est vide !</h1>
                                </div>
                            </div>
                            </div>
                            </div>
                    </div>
                    </div>
                )
            }
            return (
            <div className="cart">
                <div class="py-5">
                        <div class="container px-4 px-lg-5 mb-5">
                        <div class="row">
                        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                            <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col" class="border-0 bg-light">
                                    <div class="p-2 px-3 text-uppercase">Produit</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light">
                                    <div class="py-2 text-uppercase">Prix</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light">
                                    <div class="py-2 text-uppercase">Quantité</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light">
                                    <div class="py-2 text-uppercase">Supprimer</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {items.products.map((product) => (
                                <tr>
                                    <th scope="row" class="border-0">
                                    <div class="p-2">
                                        <img src={product.item.image} alt={product.item.name} width="70" class="img-fluid rounded shadow-sm" />
                                        <div class="ms-3 d-inline-block align-middle">
                                        <h5 class="text-dark d-inline-block align-middle">{product.item.name}</h5>
                                        </div>
                                    </div>
                                    </th>
                                    <td class="border-0 align-middle"><strong>{product.item.price}€</strong></td>
                                    <td class="border-0 align-middle"><strong>{product.qty}</strong></td>
                                    <td class="border-0 align-middle"><Button  class="text-dark" id={product.item._id} onClick={this.deleteArticle}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></Button></td>
                                </tr>
                                ))}
                                </tbody>
                            </table>
                            <Button type="button" variant="btn btn-outline-danger"  onClick={this.cleanUp}>Vider le panier</Button>

                            </div>

                        </div>
                        </div>

                        <div class="row py-5 p-4 bg-white rounded shadow-sm">
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Code promo</div>
                            <div class="p-4">
                            <p class="mb-4"><em>Si vous avez un code de réduction, utilisez le ci-dessous.</em></p>
                            <div class="input-group mb-4 border rounded-pill p-2">
                                <input type="text" placeholder="Code" aria-describedby="button-addon3" class="form-control border-0" />
                                <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Appliquer code</button>

                            </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Résumé de commande</div>
                            <div class="p-4">
                            <p class="mb-4"><em>Les coûts supplémentaires sont calculés sur base du montant de votre commande.</em></p>
                            <ul class="list-unstyled mb-4">
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Sous-total </strong><strong>{items.totalPrice}€</strong></li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Taxe</strong><strong>0€</strong></li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                <h5 class="fw-bold">{items.totalPrice}€</h5>
                                </li>
                            </ul><a href="/Checkout" class="btn btn-dark rounded-pill py-2 d-md-block">Passer au paiement</a>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
            )
        }
    }

export default Cart;
