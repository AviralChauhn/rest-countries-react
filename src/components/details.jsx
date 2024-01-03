import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import './details.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { ThemeContext } from '../App'
import { ThreeCircles } from 'react-loader-spinner'

const Details = (props) => {
    const {codes}=props
    const {theme}=useContext(ThemeContext)
    const {id}=useParams()
    const [details,setDetails]=useState([])
    function fetchData(){
        fetch(`https://restcountries.com/v3.1/alpha/${id}`).then((data)=>{
            if(data!=[]){
                return data.json()
            }
        }).then((data)=>{
            setDetails(data);
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
    {details.length?(
    <div className='parentContainer' id={theme}>
    <Link to="/">
     <button className='backButton' id={theme}><i className="fa-solid fa-arrow-left" id={theme}></i>Back</button>
     </Link>
     {details.map((item)=>{
       return  <>
        <div className='countryContainer'>
        {/* <div className='imgContainer'> */}
        <img src={item.flags.png} alt={item.name.common} className='flagImg'/>
        {/* </div> */}
        <div className='countryDetails'>
        <h1>{item.name.common}</h1>
        <div className='contentDiv'>
        <div className='contentDiv-a'>
        <p><span>Native Name:</span>{item.name.nativeName? Object.keys(item.name.nativeName).map((native)=> item.name.nativeName[native].common).join(" , "):"No Native Name"}</p>
        <p><span>Population:</span>{item.population.toLocaleString()}</p>
        <p><span>Region:</span>{item.region}</p>
        <p><span>Sub Region:</span>{item.subregion}</p>
        <p><span>Capital:</span>{item.capital}</p>
        </div>
        <div className='contentDiv-b'>
        <p><span>Top Level Domain:</span>{item.tld}</p>
        <p><span>Currencies:</span>{item.currencies ? Object.keys(item.currencies).map((cur)=>{
            return item.currencies[cur].name;
        }).join(" , "):" No Currency "}</p>
        <p><span>Languages:</span>{item.languages ? Object.keys(item.languages).map((lang)=>{
            return item.languages[lang];
        }).join(" , "):"No languages"}</p>
        </div>
        <div className='contentDiv-c'>
            <p><span>Border Countries: </span>{item.borders ? Object.keys(item.borders).map((bor)=>{
                        return <button id={theme}>{codes[item.borders[bor]]}</button>;
            }):" No border Countries "}</p>
        </div>
        </div>
        </div>
        </div>
        </>
     }
    )}
     </div>
     ):(<div className='loader'><ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div>)}
     </>
)
}

export default Details
