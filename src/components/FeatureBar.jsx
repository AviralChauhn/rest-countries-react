import React, { useEffect, useState } from 'react';
import './FeatureBar.css';
import Countries from './countries.jsx'
// let rawData;
// let filteredData;
export default function FeatureBar(props) {
    const{country}=props
    let subRegionData=[];
    let regionData=[];
    const [filteredData,setFilteredData]=useState(country)
    const [search,setSearch]=useState("");
    const [selectedRegion,setSelectedRegion]=useState("All")
    const [selectedSubRegion,setSelectedSubRegion]=useState("All")
    const [selectedSort,setSelectedSort]=useState("All")
    const [selectedAreaSort,setSelectedAreaSort]=useState("All")
    // rawData=country
    // const [searchCountry,setSearchCountry]=useState("")
    // filteredData=country
    // const handleSearch = (e) => {
      // let filteredData;
        // const searchValue = e.target.value.toLowerCase();
        // console.log(country)
      //      setFilteredData(country.filter((item) =>
      //       item.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      //       ))
      // };
      // const handleRegion=(event)=>{
        // setSelectedRegion(event.target.value)
        // console.log(event.target.value)
      //   if(event.target.value==="All"){
      //     setFilteredData(country)
      //   }else{
      //   setFilteredData(country.filter((item)=>
      //     item.region === event.target.value
      //   ))}
      // }
      // const handleRegionChange=(e)=>{
      //   setSelectedRegion(e.target.value)
        // handleRegion(e)
      // }
      useEffect(()=>{
        const filtered=country.filter((country)=>{
          const searchFilter=country.name.common.toLowerCase().includes(search.toLowerCase())
          const regionFilter=selectedRegion==='All'||country.region===selectedRegion
          const subRegionFilter=selectedSubRegion==='All'||country.subregion===selectedSubRegion
          return searchFilter && regionFilter && subRegionFilter
        })
        setFilteredData(filtered)
      },[country,search,selectedRegion,selectedSubRegion])
  
      const handleSearch=(e)=>{
        setSearch(e.target.value)
      }
      const handleRegionChange=(e)=>{
        setSelectedRegion(e.target.value)
        setSelectedSubRegion("All")
      }
      const handleSubRegionChange=(event)=>{
        setSelectedSubRegion(event.target.value)
      }
      function handleSorting(event){
        const sortValue=event.target.value
        if(sortValue=="Ascending"){
          filteredData.sort((a,b)=>a.population-b.population)
        }else if(sortValue=="Descending"){
          filteredData.sort((a,b)=>b.population-a.population)
        }
        setSelectedSort(sortValue)
      }
      function handleAreaSorting(event){
        const areaSortValue=event.target.value
        if(areaSortValue=="Ascending"){
          filteredData.sort((a,b)=>a.area-b.area)
        }else if(areaSortValue=="Descending"){
          filteredData.sort((a,b)=>b.area-a.area)
        }
        setSelectedAreaSort(areaSortValue)
      }
      function region(){
        country.forEach((item)=>{
          if(!regionData.includes(item.region)){
          regionData.push(item.region)
          }
        })
      }
      region()
      function subRegion(){
        country.forEach((item)=> {
          if(item.region==selectedRegion){
          if(selectedRegion!=="All"){
            if(!subRegionData.includes(item.subregion)){
            subRegionData.push(item.subregion)
            }
          }
        }
        })
      }
      subRegion()
      console.log(subRegionData)
  return (
    <>
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
        <div>
          <select value={selectedSubRegion} className='drop-select' onChange={(event)=>handleSubRegionChange(event)} >
            <option value="All" defaultValue={selectedSubRegion} className='dropbtncontent'>
              Filter by Subregion..
              </option>
              {subRegionData.map((item,index)=>{
               return <option key={index}>{item}</option>
              })}
          </select>
        </div>
        
      {/* <div className="dropdown">
        <select
          value={selectedRegion}
          className="drop-select"
          onChange={(event)=>handleRegionChange(event)}
        >
          <option
            value="All"
            className="dropbtncontent"
            defaultValue={selectedRegion}
          >
            Filter By Sub-Region 
          </option>
          <option value="Africa" className="dropbtncontent">Africa</option>
          <option value="Americas" className="dropbtncontent">Americas</option>
          <option value="Asia" className="dropbtncontent">Asia</option>
          <option value="Europe" className="dropbtncontent">Europe</option>
          <option value="Oceania" className="dropbtncontent">Oceania</option>
        </select>
      </div> */}
      <div className="dropdown">
        <select
          value={selectedSort}
          className="drop-select"
          onChange={(event)=>handleSorting(event)}
        >
          <option
            value="All"
            className="dropbtncontent"
            defaultValue={selectedSort}
          >
            Sort According to Population
          </option>
          <option className="dropbtncontent">Ascending</option>
          <option className="dropbtncontent">Descending</option>
          </select>
          </div>
      <div className="dropdown">
        <select
          value={selectedAreaSort}
          className="drop-select"
          onChange={(event)=>handleAreaSorting(event)}
        >
          <option
            value="All"
            className="dropbtncontent"
            defaultValue={selectedAreaSort}
          >
            Sort According to Area
          </option>
          <option className="dropbtncontent">Ascending</option>
          <option className="dropbtncontent">Descending</option>
          </select>
          </div>
        
      <div className="dropdown">
        <select
          value={selectedRegion}
          className="drop-select"
          onChange={(event)=>handleRegionChange(event)}
        >
          <option
            value="All"
            className="dropbtncontent"
            defaultValue={selectedRegion}
          >
            Filter By region 
          </option>
          {regionData.map((item,index)=>{
               return <option key={index}>{item}</option>
              })}
        </select>
      </div>
    </section>
      <Countries filteredData={filteredData}/>
      </>
  );
}
