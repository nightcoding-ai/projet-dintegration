import React, { Component } from 'react';
import logo from '../../img/Bangoo.png';
import account from '../../img/Account.png';
import basket from '../../img/Basket.png';
import connected from '../../img/connected.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';



export default class BarNav extends Component {

    render() {
        let local;
        let Button;
        local = JSON.parse(localStorage.getItem('user'));
        if (local === null) {
             Button = (
                <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Login"} ><img src={account} width="37px" alt="account" className="mx-5"/></NavLink></Nav.Item>
             )
        }
        else {
            Button = (
                <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Profile"} ><img src={connected} width="37px" alt="account" className="mx-5"/></NavLink></Nav.Item>
            )
        }

        return (
            <div>
                <Navbar bg="white" variant="light" fixed="top" expand="lg">
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} width="60%" alt="logo" className="mx-3" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                        <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/"}>Accueil</NavLink></Nav.Item>
                        {/*<Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/MarchÃ©"}>MarchÃ©</NavLink></Nav.Item>*/}
                        <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Boutique"}>Offres</NavLink></Nav.Item>
                        <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Vendeurs"}>Partenaires</NavLink></Nav.Item>
                        <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Contact"}>Contact</NavLink></Nav.Item>
                        </Nav>
                        <Nav className="mx-5">
                        <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Panier"} ><img src={basket} width="37px" alt="basket" className="mx-5"/></NavLink></Nav.Item>
                        {Button}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}