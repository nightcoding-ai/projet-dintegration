import React, { Component } from 'react';
import logo from '../../img/Bangoo.png';
import account from '../../img/Account.png';
import basket from '../../img/Basket.png';
import connected from '../../img/connected.png';
import registerForm from '../../img/register.png';
import exit from '../../img/exit.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import AuthService from "../services/auth.service";



export default class BarNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: undefined,
            currentAdmin: undefined,
            isLogged:false,
        };
    }
        
    componentDidMount() {
        AuthService.getCurrentUser()
            .then((result) => {
                if(result.data.role === "user"){
                    this.setState({
                        currentUser: result.data.role,
                        isLogged:true,
                    });
                }
                else if(result.data.role === "admin"){
                    this.setState({
                        currentAdmin: result.data.role,
                        isLogged:true,
                    });
                }
            });
      }

    logOut() {
        AuthService.deleteCurrentUser()
        .then(() => {
            window.location.href = "/Login";
          })
    }
    
    render() {
        const { currentUser, currentAdmin, isLogged } = this.state;
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
                        <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Articles"}>Articles</NavLink></Nav.Item>
                        
                        <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Vendeurs"}>Partenaires</NavLink></Nav.Item>
                        <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Boutique"}>Boutique</NavLink></Nav.Item>
                        </Nav>
                        <Nav className="mx-5">
                        <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Panier"} ><img src={basket} width="37px" alt="basket" className="mx-5"/></NavLink></Nav.Item>
                        {currentUser && (
                            <div className="navbar-nav ml-auto">
                                <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Profile"} ><img src={connected} width="37px" alt="account" className="mx-5"/></NavLink></Nav.Item>
                                
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                <img src={exit} width="37px" alt="account" className="mx-5"/>
                                </a>
                            </li>
                            </div>
                        )}
                        {currentAdmin ==="admin" && (
                            <div className="navbar-nav ml-auto">
                                <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Produit"} >Produits</NavLink></Nav.Item>
                                
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                <img src={exit} width="37px" alt="account" className="mx-5"/>
                                </a>
                            </li>
                            </div>
                        )} 
                        {isLogged === false &&(
                            <div className="navbar-nav ml-auto">
                                <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Login"} ><img src={account} width="37px" alt="account" className="mx-5"/></NavLink></Nav.Item>
                                <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Register"}><img src={registerForm} width="37px" alt="account" className="mx-5"/></NavLink></Nav.Item>
                            </div>
                        )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}