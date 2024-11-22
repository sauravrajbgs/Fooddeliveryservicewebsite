import React, { useState } from 'react'
import './Header.css'

function Header() {
  const handleClick = () => {
    // Redirect to the #exploremenu section
    window.location.href = '#exploreMenu';
  };
  return (
    <div className='header'>
        <div className='header-content'>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delactable array of dishes crafted with the finest ingredients and culinary expertise, one delicious meal at a time</p>
            <button onClick={handleClick} >view menu</button>
        </div>
    </div>
  )
}

export default Header