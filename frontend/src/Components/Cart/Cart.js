import React, { Component } from 'react'
import './Cart.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

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
        if (!this.state.isLoaded) {
          return <div>Chargement ... </div>;
        } else {
            return (
                <div className="py-5 my-5">
                    <h1 className='title'>Panier</h1>
                    <table className="table table-image">
                    <thead className="thead-dark">
                        <tr className="text-center">
                        <th>Photo</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Description</th>
                        <th>Supprimer</th>
                        </tr>
                    </thead>
                    {items.map((product) => (
                        <tr className="text-center">
                            <td>
                                <div className="box">
                                    <img className="product picture" src={product.image} alt={product.name}/>
                                </div>
                            </td>
                            <td className="w-25">{product.name}</td>
                            <td className="w-25">{product.price}€</td>
                            <td className="w-25">1</td>
                            <td className="w-25">{product.description}</td>
                            <td className="w-25"><button id={product._id} onClick={this.deleteArticle}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></button></td>
                        </tr>
                    ))}
                    </table>
                </div>
            )
        }
    }
}
export default Cart;
