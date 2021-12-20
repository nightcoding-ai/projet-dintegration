import React, { Component } from 'react'
import './Cart.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
        let id = e.currentTarget.id
        axios.get('http://localhost:5000/api/cart/reduce/'+id, {
            withCredentials:true
        })
        .then(res => {
            let msg = res.data.msg
            console.log(msg)
            if(msg === "OK"){
                //window.location.reload(false);
                let quantity = document.getElementById(id+'qty').innerHTML
                let minus = Number(quantity) - 1
                document.getElementById(id+'qty').innerHTML = minus
                axios.get('http://localhost:5000/api/cart/shopping-cart',{
                    withCredentials:true,
                    })
                    .then((result) => {
                        document.getElementById('totalPrice').innerHTML = result.data.totalPrice
                    });
            }
            else if (msg === "DELETED"){
                window.location.reload(false)
            }
        })
    }

    removeArticle = (e) => {
        axios.get('http://localhost:5000/api/cart/remove/'+e.currentTarget.id, {
            withCredentials:true
        })
        window.location.reload(false);

    }

    addArticle = (e) =>{
        let id = e.currentTarget.id
        axios.get('http://localhost:5000/api/cart/add-to-cart/'+id,{
            withCredentials:true,
            })
            .then(res => {
                let msg = res.data.msg
                if(msg === "OK"){
                    let quantity = document.getElementById(id+'qty').innerHTML
                    let somme = Number(quantity) + 1
                    document.getElementById(id+'qty').innerHTML = somme
                    axios.get('http://localhost:5000/api/cart/shopping-cart',{
                    withCredentials:true,
                    })
                    .then((result) => {
                        document.getElementById('totalPrice').innerHTML = result.data.totalPrice
                    });
                }
                else if (msg === "ERROR"){
                    toast.error('Vous avez atteint la limite des stocks', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        });
                }
            })
    }

    render() {
        const { items } = this.state;
            if(!this.state.isLoaded || items.products == null || items.products.length === 0){
                return(
                <>
                    <div className="cart">
                    <div className="py-5">
                            <div className="container px-4 px-lg-5 mb-5">
                            <div className="row">
                            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col" className="border-0 bg-light">
                                        <div className="p-2 px-3 text-uppercase">Image</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                        <div className="p-2 px-3 text-uppercase">Produit</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Prix</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Quantité</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Supprimer</div>
                                        </th>
                                    </tr>
                                    </thead>
                                </table>

                                </div>
                            </div>
                            </div>
                            </div>
                    </div>
                    </div>
                    <div className="row py-5 p-4 bg-white rounded shadow-sm">
                    <div className="col-lg-6">
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Code promo</div>
                        <div className="p-4">
                        <p className="mb-4"><em>Si vous avez un code de réduction, utilisez le ci-dessous.</em></p>
                        <div className="input-group mb-4 border rounded-pill p-2">
                            <input type="text" placeholder="Code" aria-describedby="button-addon3" className="form-control border-0" />
                            <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Appliquer code</button>

                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Résumé de commande</div>
                        <div className="p-4">
                        <p className="mb-4"><em>Les coûts supplémentaires sont calculés sur base du montant de votre commande.</em></p>
                        <ul className="list-unstyled mb-4">
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                            <h5 className="fw-bold">{items.totalPrice}€</h5>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </>
                )
            }
            return (
            <div className="cart">
                <div className="py-5">
                        <div className="container px-4 px-lg-5 mb-5">
                        <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                            <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col" className="border-0 bg-light">
                                    <div className="p-2 px-3 text-uppercase">Image</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                    <div className="p-2 px-3 text-uppercase">Produit</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                    <div className="py-2 text-uppercase">Prix</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                    <div className="py-2 text-uppercase">Quantité</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                    <div className="py-2 text-uppercase">Supprimer</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {items.products.map((product) => (
                                <tr>
                                     <th scope="row" className="border-0">
                                    <div className='box "my-3'>
                                        <img src={product.item.image} alt={product.item.name} width="150" className="picture" />
                                    </div>
                                    </th>
                                    <td className="border-0 align-middle"><strong>{product.item.name}</strong></td>

                                    <td className="border-0 align-middle"><strong>{product.item.price}€</strong></td>
                                    <td className="border-0 align-middle">
                                         <button  className="btn-dark minus" id={product.item._id} onClick={this.deleteArticle}><FontAwesomeIcon icon={faMinus} size="xs"/></button>
                                        <strong id={product.item._id+'qty'}>{product.qty}</strong>
                                        <button  className="btn-dark plus" id={product.item._id} onClick={this.addArticle}><FontAwesomeIcon icon={faPlus} size="xs"/></button>
                                    </td>
                                    <td className="border-0 align-middle">
                                        <button  className="btn-dark trash" id={product.item._id} onClick={this.removeArticle}><FontAwesomeIcon icon={faTrashAlt} size="lg"/></button>
                                    </td>

                                </tr>
                                ))}
                                </tbody>
                            </table>
                            <Button type="button" variant="btn btn-outline-danger delete"  onClick={this.cleanUp}>Vider le panier</Button>

                            </div>

                        </div>
                        </div>

                        <div className="row py-5 p-4 bg-white rounded shadow-sm">
                        <div className="col-lg-6">
                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Code promo</div>
                            <div className="p-4">
                            <p className="mb-4"><em>Si vous avez un code de réduction, utilisez le ci-dessous.</em></p>
                            <div className="input-group mb-4 border rounded-pill p-2">
                                <input type="text" placeholder="Code" aria-describedby="button-addon3" className="form-control border-0" />
                                <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill code"><i className="fa fa-gift mr-2"></i>Appliquer code</button>

                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Résumé de commande</div>
                            <div className="p-4">
                            <p className="mb-4"><em>Les coûts supplémentaires sont calculés sur base du montant de votre commande.</em></p>
                            <ul className="list-unstyled mb-4">
                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                <h5 className="fw-bold"><span id='totalPrice'>{items.totalPrice}</span>€</h5>
                                </li>
                            </ul><a href="/Checkout" className="btn btn-dark rounded-pill py-2 d-md-block">Passer au paiement</a>
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
