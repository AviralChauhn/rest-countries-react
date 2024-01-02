import React, { useContext, useEffect, useState } from 'react';
import './FeatureBar.css';
import Countries from './countries.jsx'
import Dropdown from './dropDownFeature.jsx';
import { ThemeContext } from '../App.jsx';
export default function FeatureBar(props) {
  const {theme}=useContext(ThemeContext)
    const{country}=props
    let subRegionData=[];
    let regionData=[];
    const [search,setSearch]=useState("");
    const [selectedRegion,setSelectedRegion]=useState("All")
    const [selectedSubRegion,setSelectedSubRegion]=useState("All")
    const [selectedSort,setSelectedSort]=useState("All")
    const [selectedAreaSort,setSelectedAreaSort]=useState("All")
        const filtered=country.filter((country)=>{
          const searchFilter=country.name.common.toLowerCase().includes(search.toLowerCase())
          const regionFilter=selectedRegion==='All'||country.region===selectedRegion
          const subRegionFilter=selectedSubRegion==='All'||country.subregion===selectedSubRegion
          return searchFilter && regionFilter && subRegionFilter
        })
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
        
        if(selectedSort=="Ascending"){
          filtered.sort((a,b)=>a.population-b.population)
        }else if(selectedSort=="Descending"){
          filtered.sort((a,b)=>b.population-a.population)
        }
        
      
        if(selectedAreaSort=="Ascending"){
          filtered.sort((a,b)=>a.area-b.area)
        }else if(selectedAreaSort=="Descending"){
          filtered.sort((a,b)=>b.area-a.area)
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
  return (
    <>
    <section className="feature-bar" id={theme}>
      <div className="search-feature" id={theme}>
        <i className="fa-solid fa-magnifying-glass" id={theme}></i>
        <input
          type="text"
          className="search-box"
          placeholder="Search for country ..."
          id={theme}
          onChange={(e)=>handleSearch(e)}
        />
      </div>
      <Dropdown
          options={subRegionData}
          value={selectedSubRegion}
          onChange={(e) => setSelectedSubRegion(e.target.value)}
          placeholder="Filter by Subregion"
        />
      <Dropdown
          options={regionData}
          value={selectedRegion}
          onChange={(e) => {
            setSelectedRegion(e.target.value)
            setSelectedSubRegion("All")
          }}
          placeholder="Filter by Region"
        />
      <Dropdown
          options={["Ascending", "Descending"]}
          value={selectedSort}
          onChange={(e) => {
            setSelectedSort(e.target.value);
            setSelectedAreaSort("All");
          }}
          placeholder="Sort by Population"
        />
      <Dropdown
          options={["Ascending", "Descending"]}
          value={selectedAreaSort}
          onChange={(e) => {
            setSelectedSort("All");
            setSelectedAreaSort(e.target.value);
          }}
          placeholder="Sort By Area"
        />
    </section>
      <Countries filtered={filtered} search={search}/>
      </>
  );
}
