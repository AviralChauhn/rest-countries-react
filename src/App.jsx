import React, { useEffect } from 'react'
import Countries from './components/countries'
import NavBar from './components/NavBar'
import FeatureBar from './components/FeatureBar'
let countryData;
function App() {
  
  // console.log(countryData)
  return (
    <div>
      {/* <h2>Creating react app</h2> */}
      <NavBar/>
      {/* <FeatureBar/> */}
      <Countries/>
    </div>
  )
}

export default App
