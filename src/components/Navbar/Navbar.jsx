import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import SearchForm from '../SearchForm/SearchForm'


const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
                <h1>BookVault</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div className="dark-mode-button">
                <button>Dark Mode</button>
            </div>
                
            
            
        </nav>
    </>
  )
}

export default Navbar