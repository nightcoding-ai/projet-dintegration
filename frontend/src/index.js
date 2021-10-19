
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
import GPU from './Components/GPU/Gpu';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Marché" component={Home} />
        <Route path="/Vendeurs" component={Home} />
        <Route path="/Contact" component={Home} />
        <Route path="/GPU" component={GPU}/>

        <Route path="/Panier" component={Home} />
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
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
