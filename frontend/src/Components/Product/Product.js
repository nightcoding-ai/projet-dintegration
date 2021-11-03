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
        /*this.nameChange = this.nameChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.brandChange = this.brandChange.bind(this);
        this.stockChange = this.stockChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.urlImageChange = this.urlImageChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);*/
        this.sendProduct = this.sendProduct.bind(this);
    }

    cleanFields() {
        gid("name").value = "";
        gid("description").value = "";
        gid("stock").value = "";
        gid("price").value = "";
        gid("urlImage").value = "";
        gid("brand").value = "";
    }

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            addItem: {
                [target.name]: target.value
            }
        });
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

    getData() {
        let namex = gid("name").value;
        let desc = gid("description").value;
        let stockx = gid("stock").value;
        let pricex = gid("price").value;
        let urlImage = gid("urlImage").value;
        let brandx = gid("brand").value; 
        return {name: namex, description: desc, stock: stockx, price: pricex, image : urlImage, brand: brandx};
    }

    verifyData(object) {
        if(!object.name || !object.description || !object.stock || !object.price || !object.image || !object.brand) return false;
    }

    sendProduct() {
        let data = {};
        data = this.getData();
        //if(this.verifyData(data) == false) return console.log("A field is wrong !");
        axios.post('http://localhost:5000/api/products/', data)
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
                <Modal show={this.state.show} handleClose={this.hideModal} /*onChange={this.handleInputChange} name={this.nameChange} description={this.descriptionChange} 
                    stock={this.stockChange} price={this.priceChange} urlImage={this.urlImageChange} brand={this.brandChange}*/ send={this.sendProduct}>
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
