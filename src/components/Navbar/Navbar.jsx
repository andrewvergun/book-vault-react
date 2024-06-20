import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className="logo">
                <Link to="/" className='logo-link'>
                    <img className="logo-icon" src={logo} alt="" />
                    <h1 className='logo-text'>BookVault</h1>
                </Link>
            </div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
            <div className="free-space">
                
            </div>
                
            
            
        </nav>
    </>
  )
}

export default Navbar