import logo from './img/Bangoo.png';
import account from './img/Account.png';
import basket from './img/Basket.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap'
import { NavLink, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar bg="transparent" variant="light" sticky="top" expand="lg">
            <Navbar.Brand>
                <Link to="/">
                  <img src={logo} width="60%" alt="logo" className="mx-3" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto">
                  <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/"}>Accueil</NavLink></Nav.Item>
                  <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Marché"}>Marché</NavLink></Nav.Item>
                  <Nav.Item className="nav-item"><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Vendeurs"}>Vendeurs</NavLink></Nav.Item>
                  <Nav.Item><NavLink activeClassName="active" className="text-dark nav-link px-5" exact to={"/Contact"}>Contact</NavLink></Nav.Item>
                  </Nav>
                  <div className="dropdown-divider mx-5"></div>
                  <Nav className="mx-5">
                  <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Panier"} ><img src={basket} width="37px" alt="basket" className="mx-5"/></NavLink></Nav.Item>
                  <Nav.Item><NavLink activeClassName="active" className="nav-link" exact to={"/Login"} ><img src={account} width="37px" alt="account" className="mx-5"/></NavLink></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default App;
