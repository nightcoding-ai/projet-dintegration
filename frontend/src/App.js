import React from 'react';
import BarNav from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <BarNav/>
      <ToastContainer/>
    </div>
  );
}

export default App;
