import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <nav>
           <Link to='/' className='brand'>
            <h1>Meatworks</h1>
            </Link>
         
            <Link to='/create'>Create Recipe</Link>
        </nav>
    </div>
  )
}
 