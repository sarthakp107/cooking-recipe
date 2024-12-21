import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import SearchBar  from './SearchBar'
import { useTheme } from '../hooks/useTheme'



export const NavBar = () => {
const {color , changeColor} = useTheme();

  return (
    <div className='navbar' style={{backgroundColor: color}}>
        <nav>
           <Link to='/' className='brand'>
            <h1>Meatworks</h1>
            </Link>
            <SearchBar/>
         
            <Link to='/create'>Create Recipe</Link>
        </nav>
    </div>
  )
}
 