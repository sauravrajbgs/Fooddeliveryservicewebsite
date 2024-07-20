import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import {Link}from 'react-router-dom'

function Navbar() {
  const[menu ,serMenu]=useState("home")
  return (
 <navbar className='navbar'>
 <img src={assets.logo}alt='' className='logo'/>
 <ul className='navbar-menu'>
  <Link to='/'  onClick={()=>serMenu('home')} className={menu=="home"?"active":""}>home</Link>
  <a href='#exploreMenu' onClick={()=>serMenu('menu')} className={menu=="menu"?"active":""}>menu</a>
  <a href='#footer'  onClick={()=>serMenu('contact us')}className={menu=="contact us"?"active":""}>contact us</a>
  <a href='#app-download'  onClick={()=>serMenu('mobile-app')}className={menu=="mobile-app"?"active":""}>mobile-app</a>
 </ul>
 <div className='navbar-right'>
  <img src={assets.search_icon} alt=''className=''/>
  <div className='navbar-search-icon'>
    <img src={assets.basket_icon}alt=''/>
    <div className='dot'></div>
  </div>
  <button>sign in</button>
 </div>
 </navbar>
  )
}

export default Navbar;