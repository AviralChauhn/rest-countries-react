import React, { useContext, useEffect, useState } from 'react'
import './countries.css'
import './FeatureBar.css'
import { ThemeContext } from '../App.jsx'
import { ThreeCircles } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
// import FeatureBar from './FeatureBar'
const API_URL="https://restcountries.com/v3.1/all"
export default function Countries(props) {
  const {theme}=useContext(ThemeContext)
    const {filtered,search}=props;
    // console.log(filteredData)
    // let [country,setCountry]=useState([])
    // const [search,setSearch]=useState("");
    // const [selectedRegion,setSelectedRegion]=useState("All")
    // const [filteredCountries,setFilteredCountries]=useState([])
    // const fetchData=()=>{
    //   fetch(API_URL).then((data)=>data.json()).then((data)=>{setCountry(data)})
    // }
    // useEffect(()=>{
    //   fetchData();
    // },[])
    // useEffect(()=>{
      
      // const filteredCountries=country.filter((country)=>{
      //   const searchFilter=country.name.common.toLowerCase().includes(search.toLowerCase())
      //   const regionFilter=selectedRegion==='All'||country.region===selectedRegion
      //   return searchFilter && regionFilter
      // })
    //   setFilteredCountries(filtered)
    // },[country,search,selectedRegion])

    // const handleSearch=(e)=>{
    //   setSearch(e.target.value)
    // }
    // const handleRegionChange=(e)=>{
    //   setSelectedRegion(e.target.value)
    // }
  return (
    // <section>
    
    <section className='information-section' id={theme}>
      {filtered.length?(
      filtered.map((item)=>{
      return( 
      <Link key={`${item.ccn3}`} to={`/country/${item.ccn3}`} style={{textDecoration:"none",color: "var(--Very-Dark-Blue-Light-mode : hsl(200, 15%, 8%))"}}>
      <div className='cardContainer' key={item.name.common}> 
       <img src={item.flags.png} alt={item.name.common} className='flag-img'/>
        <h3 className='country-name'>{item.name.common}</h3>
        <ul>
        <li><span>Population: </span>{item.population.toLocaleString()}</li>
        <li><span>Capital: </span>{item.capital}</li>
        <li><span>Region: </span>{item.region}</li>
        </ul>
        </div>
        </Link>)
})):(!search?(<ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />):<h2>No Such Countries found........</h2>
  )}
    </section>
      )
    }
    
    /* <FeatureBar country={country} setCountry={setCountry}/> */
    /* <section className="feature-bar">
      <div className="search-feature">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="search-box"
          placeholder="Search for country ..."
          id="search-bar"
          onChange={(e)=>handleSearch(e)}
        />
      </div>

      <div className="dropdown">
        <select
          value={selectedRegion}  
          className="drop-select"
          onChange={handleRegionChange}
        >
          <option
            value="All"
            defaultValue={selectedRegion}
            className="dropbtncontent"
            selected
          >
            Filter By region 
          </option>
          <option value="Africa" className="dropbtncontent">Africa</option>
          <option value="Americas" className="dropbtncontent">Americas</option>
          <option value="Asia" className="dropbtncontent">Asia</option>
          <option value="Europe" className="dropbtncontent">Europe</option>
          <option value="Oceania" className="dropbtncontent">Oceania</option>
        </select> */
        /* <div className="dropdown-content"> 
          <option
            value="All"
            className="dropbtncontent"
            selected
          >
            Filter by region
          </option>
          <option value="Africa" className="dropbtncontent">Africa</option>
          <option value="Americas" className="dropbtncontent">Americas</option>
          <option value="Asia" className="dropbtncontent">Asia</option>
          <option value="Europe" className="dropbtncontent">Europe</option>
          <option value="Oceania" className="dropbtncontent">Oceania</option>
        </div> */
      /* </div> */
