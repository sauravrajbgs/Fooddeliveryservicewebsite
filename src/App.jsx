import React, { useState } from 'react'
import Navbar from './components/navbar/navbar';
import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/home';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Loginpopup from './components/LoginPopup/Loginpopup';
import Verify from './pages/verify/Verify';
import MyOrder from './pages/MyOrder/MyOrder';
import Searchitem from './components/SearchItem/Searchitem';

function App() {
  const[showLogin ,setshowLogin]=useState(false)
  const[search ,setSearch]=useState(false)
  return (
    <>
    {showLogin? <Loginpopup  setshowLogin={setshowLogin}/>:<></>}
    {search? <Searchitem setSearch={setSearch}/>:<></>}
     <div className='App'>
       <Navbar setshowLogin={setshowLogin} setSearch={setSearch}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorder'element={<MyOrder/>}/>
      </Routes>
   
    </div>
    <Footer/>
    </>
   
    
  

 

  )
}

export default App;