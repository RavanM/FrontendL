import React from 'react'
import './CompCss/HeaderCss.css'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <p>SLODxVC</p>
            </div>
            
            <Navbar />       
        </div>
    )
}

export default Header
