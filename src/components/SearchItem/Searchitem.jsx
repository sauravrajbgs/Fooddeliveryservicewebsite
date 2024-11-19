import React, { useEffect, useState } from 'react'
import './SearchItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useNavigate }from 'react-router-dom'

function Searchitem({setSearch}) {
 const[data, setData]=useState({
  item:"",
 })
 const onchangeHandler = async (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setData(data => ({ ...data, [name]: value }))

}
useEffect(()=>{
console.log(data)
},[data])

  return (
    <>
     <div className='search-popup'>
     <div className='search-container'>
     <div className='btn-icon'>
        <img  onClick={() => setSearch(false)}  src={assets.cross_icon}alt=''/>
       </div>
        <div className='input-btn'>
        <input onChange={onchangeHandler} name='item' value={data.item} type='search'placeholder='seach your favourate dish'></input>
        <button >search</button>
        </div>
     
     
      </div>
     </div>
    </>
   
  )
}

export default Searchitem