import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className='footer'id='footer'>
<div className='footer-content'>
    <div className='footer-content-left'>
<img src={assets.logo}alt=''/>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aperiam modi unde placeat voluptate velit repudiandae eos perspiciatis cumque voluptates deserunt eaque magnam itaque reprehenderit, quis nam animi amet neque!</p>
<div className='footer-social-icon'>
    <img src={assets.facebook_icon}alt=''/>
    <img src={assets.twitter_icon}alt=''/>
    <img src={assets.linkedin_icon}alt=''/>
</div>
    </div>
    <div className='footer-content-right'>
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privecy Policy</li>
</ul>
    </div>
    <div className='footer-content-center'>
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-456-7890</li>
    <li>contact@tomato.com</li>
</ul>
    </div>
</div>
<hr/>
<p className='footer-copyright'>copyright 2024 #$Tomato.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer