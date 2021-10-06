import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand>
                <img src={logo} width="80%" alt="logo" className="mx-2" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto mx-5">
                    <Nav.Link className="Link px-3" href="Accueil">Accueil</Nav.Link>
                    <Nav.Link className="Link px-3" href="Marché">Marché</Nav.Link>
                    <Nav.Link className="Link px-3" href="Espace_Com">Espace commerçant</Nav.Link>
                    <Nav.Link className="Link px-3" href="Scanner">Scanner</Nav.Link>
                    <Nav.Link className="Link px-3" href="Contact">Nous contacter</Nav.Link>
                </Nav>
                <Nav className="mx-5">
                     <Nav.Link className="Link  px-3" href="Panier">Panier</Nav.Link>
                     <Nav.Link className="Link  px-3" href="Connexion">Connexion</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        <div className="content">
            On est sur bangoo!
        </div>
    </div>
  );
}

export default App;
