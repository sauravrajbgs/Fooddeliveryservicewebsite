import React from 'react'
import Navbar from './components/navbar/navbar';
import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/home';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <div className='App'>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
   
    </div>
    <Footer/>
    </>
   
    
  

 

  )
}

export default App;