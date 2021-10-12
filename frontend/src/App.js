import logo from './img/Bangoo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand>
                <img src={logo} width="80%" alt="logo" className="mx-2" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto mx-5 ">
                  <Nav.Item><NavLink className="nav-link px-3" exact to={"/"}>Accueil</NavLink></Nav.Item>
                  <Nav.Item><NavLink className="nav-link px-3" exact to={"/Marché"}>Marché</NavLink></Nav.Item>
                  <Nav.Item><NavLink className="nav-link px-3" exact to={"/Vendeurs"}>Vendeurs</NavLink></Nav.Item>
                  <Nav.Item><NavLink className="nav-link px-3" exact to={"/Contact"}>Contact</NavLink></Nav.Item>
                </Nav>
                <Nav className="mx-5">
                  <Nav.Item><NavLink className="nav-link px-3" exact to={"/Panier"}>Panier</NavLink></Nav.Item>
                  <Nav.Item><NavLink className="nav-link px-3" exact to={"/Login"}>Connexion</NavLink></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default App;
