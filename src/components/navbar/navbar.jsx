import React, { useContext, useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import {Link, useNavigate}from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'

function Navbar({setshowLogin, setSearch}) {
  const[menu ,serMenu]=useState("home")
  const {getTotalCartAmount ,token ,setToken}=useContext(StoreContext);
  const navigate=useNavigate();
  const logout=()=>{
localStorage.removeItem("token");
setToken("");
navigate();


  }
  return (
 <navbar className='navbar'>
 <Link to= '/'><img src={assets.logo}alt='' className='logo'/></Link>
 <ul className='navbar-menu'>
  <Link to='/'  onClick={()=>serMenu('home')} className={menu=="home"?"active":""}>home</Link>
  <a href='#exploreMenu' onClick={()=>serMenu('menu')} className={menu=="menu"?"active":""}>menu</a>
  <a href='#footer'  onClick={()=>serMenu('contact us')}className={menu=="contact us"?"active":""}>contact us</a>
  <a href='#app-download'  onClick={()=>serMenu('mobile-app')}className={menu=="mobile-app"?"active":""}>mobile-app</a>
 </ul>
 <div className='navbar-right'>
  <img onClick={setSearch} src={assets.search_icon} alt=''className=''/>
  <div className='navbar-search-icon'>
   <Link to='/cart'><img src={assets.basket_icon}alt=''/></Link> 
    <div className={getTotalCartAmount()===0?"":"dot"}></div>
  </div>
  {! token?<button onClick={()=>setshowLogin(true)}>sign in</button>:
  <div className='navbar-profile'>
<img src={assets.profile_icon}alt=''/>
<ul className='nav-profile-dropdown'>
  <li onClick={()=>navigate('/myorder')}><img src={assets.bag_icon}alt=''/><p>Order</p></li>
  <hr/>
  <li onClick={logout}><img src={assets.logout_icon}alt=''/><p>Logout</p></li>
</ul>
  </div>}
 
 </div>
 </navbar>
  )
}

export default Navbar;