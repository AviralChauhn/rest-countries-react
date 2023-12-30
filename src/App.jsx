import React, {useState, useEffect,createContext } from 'react'
// import Countries from './components/countries'
import NavBar from './components/NavBar'
import FeatureBar from './components/FeatureBar'
import './App.css';
const API_URL="https://restcountries.com/v3.1/all"
export const ThemeContext=createContext(null)
function App() {
  const [theme,setTheme]=useState("light")
  let [country,setCountry]=useState([])
  const fetchData=()=>{
    fetch(API_URL).then((data)=>{
      if(!data.ok){
        console.log(1)
        // return (<h2>{`HTTP error Status:${response.status}`}</h2>)
        throw new Error(`HTTP error Status:${response.status}`) 
      }
      return data.json()
    })
    .then((data)=>{setCountry(data)})
    .catch((err)=> console.log(err))
  }
  useEffect(()=>{
    fetchData();
  },[])
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light")?"dark":"light")
  }
  // console.log(country)
  // console.log(countryData)
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div>
      <NavBar/>
      {/* <div id={theme}> */}
      <FeatureBar country={country}/>
      {/* </div> */}
      {/* <Countries/> */}
    </div>
    </ThemeContext.Provider>
  )
}

export default App
