import React, { Component } from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom';
import './Product.css';
import Modal from './Modal.js';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          show: false,
          addItem: {
            name:"",
            description: "",
            brand: "",
            stock: "",
            price: "",
            urlImage: ""}
        };
    }

    cleanFields() {
        gid("name").value = "";
        gid("description").value = "";
        gid("stock").value = "";
        gid("price").value = "";
        gid("urlImage").value = "";
        gid("brand").value = "";
    }

    nameChange = (event) => {
        this.setState({addItem: {name: event.target.value}});
    }

    descriptionChange = (event) => {
        this.setState({addItem: {description: event.target.value}});
    }

    stockChange = (event) => {
        this.setState({addItem: {stock: event.target.value}});
    }

    priceChange = (event) => {
        this.setState({addItem: {price: event.target.value}});
    }

    urlImageChange = (event) => {
        this.setState({addItem: {urlImage: event.target.value}});
    }

    brandChange = (event) => {
        this.setState({addItem: {brand: event.target.value}});
    }

    showModal = () => {
        this.cleanFields();
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }
    
    componentDidMount() {
        axios.post('http://localhost:5000/api/products', this.addItem)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    render() {
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal} name={this.nameChange} description={this.descriptionChange} 
                    stock={this.stockChange} price={this.priceChange} urlImage={this.urlImageChange} brand={this.brandChange}>
                </Modal>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_Product" onClick={this.showModal}>
                    Add product
                </button>
            </div>
        );
    }
}

export default Product;

function gid(id) {
    return document.getElementById(id);
}
