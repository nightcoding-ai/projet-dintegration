import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import GPU from './Components/Gpu/Gpu';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';
import ListCommerce from './Components/Product/List';
import Product from './Components/Product/Product';
import userContext from './Components/Context/userContext';
import Default from './Components/Default/Default';

ReactDOM.render(
  <React.StrictMode>
    <userContext.Provider value="this is a test">
      <Router>
        <App />
        <Switch>
          <Route exact path="/" component={Default} />
          <Route path="/Marché" component={Home} />
          <Route path="/Boutique" component={Shop} />
          <Route path="/Vendeurs" component={Home} />
          <Route path="/Contact" component={Home} />
          <Route path="/GPU" component={GPU}/>
          <Route path="/Panier" component={Cart} />
          <Route path='/ListeCommerce' component={ListCommerce} />
          <Route path='/Produit' component={Product} />
          <div className="outer">
            <div className="inner">
              <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/Forgotpassword" component={ForgotPassword}/>
              </Switch>
            </div>
          </div>
        </Switch>
        <Footer className="footer"/>
      </Router>
    </userContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
