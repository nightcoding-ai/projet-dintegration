import React, { useState, useEffect } from 'react'
import './Cart.css'
import axios from 'axios'

export default function Cart() {
    const [products, updateProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
        .then((response) => {
            updateProducts(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <div>
            <h1 className='title'>Panier</h1>
            <table className="table table-image">
            <thead className="thead-dark">
                <tr className="text-center">
                <th>Choix</th>
                <th>Photo</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody id="productList">
            </tbody>
            {products.map((product) => (
                <tr className="text-center">
                    <input type="checkbox" id={product.name} name={product.name} className="center"/>
                    <td><img className="product" src={product.image} alt={product.name}/></td>
                    <td className="w-25">{product.name}</td>
                    <td className="w-25">{product.price}€</td>
                    <td className="w-25">{product.description}</td>
                </tr>
            ))}
            </table>
        </div>
    )
}
