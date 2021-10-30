import React, { useState, useEffect ,Component} from 'react'
import axios from 'axios'
import { NavLink, Link } from 'react-router-dom';
import './Shop.css';

export default function Shop() {
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
            <h1 className='title'>Articles</h1>
            <table className="table table-image">
            <tbody id="productList">
            </tbody>
            {products.map((product) => (
                    <td><Link to="/"><img className="product" src={product.image} alt={product.name}/>{product.name}</Link></td>   
            ))}
            </table>
        </div>
    )
}
