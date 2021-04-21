import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  const [productsArray, setProductsArray] = useState([]);

  const axiosGet = () => {
    let apiURL = "https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products";
    axios.get(apiURL)
      .then(function (response) {
        // handle success
        setProductsArray(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(axiosGet, []);


  return (
    <div className='App container'>
      <Router>
        <Header />
      </Router>
    </div>
  )
}

export default App;
