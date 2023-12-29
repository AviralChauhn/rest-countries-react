import React from 'react'
import './NavBar.css'
import '@fortawesome/fontawesome-free/css/all.css';
export default function NavBar() {
  return (

    <section className='nav'>
        <div className='nav-bar'>
            <h2>Where in the World ?</h2>
            <div className='dark-mode' id="dark-mode-btn">
            <i className="fa-regular fa-moon"></i>
            <p className="dark-text">Dark Mode</p>
            </div>
        </div>
    </section>
  )
}
