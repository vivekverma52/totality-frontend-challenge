import React, { useState, useContext } from 'react';

// importing routes and route

import { Routes, Route } from 'react-router-dom'; 

//importing conponents

import Header from './components/Header';
import Footer from './components/Footer';
import CartContext from './contexts/CartContext';

//importing pages

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Cart from './pages/Cart';
import Payment from './pages/payment.js';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart(prevCart => [...prevCart, newItem]); // Append new item to the existing cart
  };

  const removeFromCart = (houseId) => {
    setCart(prevCart => prevCart.filter(item => item.houseId !== houseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart,addToCart ,removeFromCart,clearCart}}>
      <div>
        <Header />
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/property/:id' element ={<PropertyDetails />} />
          <Route path='/cart' element ={<Cart />} />
          <Route path='/payment' element ={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default App;
