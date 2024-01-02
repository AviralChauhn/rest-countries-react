import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './App'
const Error = () => {
    const {theme}=useContext(ThemeContext)
  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center"}} id={theme}>
     <h2> No Such Page Found</h2>
    </div>
  )
}

export default Error
