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
          show: false
        };
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    
    componentDidMount() {
        axios.post('http://localhost:5000/api/products')
            .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
        });
    }


    render() {
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                </Modal>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_Product" onClick={this.showModal}>
                    Add product
                </button>
            </div>
        );
    }
}

export default Product;
