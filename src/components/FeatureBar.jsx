import React, { useState } from 'react';
import './FeatureBar.css';
// import Countries from './countries'
// let rawData;
export default function FeatureBar(props) {
    const{country,setCountry}=props
    // rawData=country
    // const [searchCountry,setSearchCountry]=useState("")
    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        // console.log(e.target.value)
        if (searchValue === "") {
          console.log(country)
        } else {
            const filteredData = country.filter((item) =>
            item.name.common.toLowerCase().includes(searchValue)
          );
          setCountry(filteredData);
        }
      };
      
  return (
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
          value="select"  
          className="drop-select"
        >
          <option
            value="All"
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
  );
}
