import React, { useState } from 'react'
import './home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
 import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/appDownload';

function Home({searchTerm} ) {
  const[category , setCategory]=useState("All")
  return (
    <>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay  category={category} searchTerm={searchTerm} /> 
      <AppDownload/>
    </>
  
  )
}

export default Home