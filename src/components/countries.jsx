import React, { useEffect, useState } from 'react'
import './countries.css'
import './FeatureBar.css'
// import FeatureBar from './FeatureBar'
const API_URL="https://restcountries.com/v3.1/all"
export default function Countries() {
    // const {data}=props;
    let [country,setCountry]=useState([])
    const [search,setSearch]=useState("");
    const [selectedRegion,setSelectedRegion]=useState("All")
    const [filteredCountries,setFilteredCountries]=useState([])
    const fetchData=()=>{
      fetch(API_URL).then((data)=>data.json()).then((data)=>{setCountry(data)})
    }
    useEffect(()=>{
      fetchData();
    },[])
    useEffect(()=>{
      const filtered=country.filter((country)=>{
        const searchFilter=country.name.common.toLowerCase().includes(search.toLowerCase())
        const regionFilter=selectedRegion==='All'||country.region===selectedRegion
        return searchFilter && regionFilter
      })
      setFilteredCountries(filtered)
    },[country,search,selectedRegion])

    const handleSearch=(e)=>{
      setSearch(e.target.value)
    }
    const handleRegionChange=(e)=>{
      setSelectedRegion(e.target.value)
    }
  return (
    <>
    {/* <FeatureBar country={country} setCountry={setCountry}/> */}
    <section className="feature-bar">
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
        </select>
        {/* <div className="dropdown-content"> 
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
        </div> */}
      </div>
    </section>
    <section className='information-section'>
      {filteredCountries.map((item)=>{
       return<div className='cardContainer' key={item.name.common}> 
       <img src={item.flags.png} alt={item.name.common} className='flag-img'/>
        <h3 className='country-name'>{item.name.common}</h3>
        <ul>
        <li><span>Population: </span>{item.population.toLocaleString()}</li>
        <li><span>Capital: </span>{item.capital}</li>
        <li><span>Region: </span>{item.region}</li>
        </ul>
        </div>
      })}
    </section>
    </>
  )
}
