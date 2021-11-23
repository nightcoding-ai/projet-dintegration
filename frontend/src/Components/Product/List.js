import React, { Component } from 'react'
import axios from 'axios';
import './Product.css';
import Product from "./Product";
import { Button } from 'react-bootstrap';

class ListCommerce extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          items: [],
          isLoaded: false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/products/')
            .then((result) => {
                this.setState({ 
                    isLoaded: true,
                    items: result.data
                })
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    deleteProduct(id) {
        axios.delete("http://localhost:5000/api/products/" + id)
            .then(this.componentDidMount());
    }

    render() {
        const { items } = this.state;
        if (!this.state.isLoaded) {
            return <div>Chargement ... </div>;
        } else {
            return(
                <div>
                    <div id="product">
                        <Product></Product>
                    </div>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                        {items.map((product) => (
                            <tr>
                                <td id="list">{product.name}</td>
                                <td id="list">{product.stock}</td>
                                <td id="list">{product.price} <Button className="deleteButton" id={product._id} onClick={() => this.deleteProduct(product._id)}>Delete</Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default ListCommerce;