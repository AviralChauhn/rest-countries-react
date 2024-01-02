import React, {useState, useEffect,createContext } from 'react'
import NavBar from './components/NavBar'
import Error from './Error';
import FeatureBar from './components/FeatureBar'
import Details from './components/details';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
const API_URL="https://restcountries.com/v3.1/all"
export const ThemeContext=createContext(null)
function App() {
  const [theme,setTheme]=useState("light")
  let [country,setCountry]=useState([])
  const fetchData=()=>{
    fetch(API_URL).then((data)=>{
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
  const codes=country.reduce((acc,curr)=>{
    acc[curr.cca3]=curr.name.common
    return acc
  },{})
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<FeatureBar country={country}/>}/>
      <Route path='/country/:id' element={<Details codes={codes}/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
