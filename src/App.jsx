import React, {useState, useEffect } from 'react'
// import Countries from './components/countries'
import NavBar from './components/NavBar'
import FeatureBar from './components/FeatureBar'
const API_URL="https://restcountries.com/v3.1/all"

function App() {
  let [country,setCountry]=useState([])
  const fetchData=()=>{
    fetch(API_URL).then((data)=>data.json()).then((data)=>{setCountry(data)})
  }
  useEffect(()=>{
    fetchData();
  },[])
  // console.log(country)
  // console.log(countryData)
  return (
    <div>
      {/* <h2>Creating react app</h2> */}
      <NavBar/>
      <FeatureBar country={country}/>
      {/* <Countries/> */}
    </div>
  )
}

export default App
