import React, { useContext } from 'react'
import './NavBar.css'
import { ThemeContext } from '../App';
import '@fortawesome/fontawesome-free/css/all.css';
export default function NavBar() {
  const {theme,toggleTheme} = useContext(ThemeContext)
  return (

    <section className='nav' id={theme}>
        <div className='nav-bar'>
            <h2>Where in the World ?</h2>
            <div className='dark-mode' id="dark-mode-btn" onClick={()=>toggleTheme()}>
            <i className="fa-regular fa-moon"></i>
            <p className="dark-text">Dark Mode</p>
            </div>
        </div>
    </section>
  )
}
