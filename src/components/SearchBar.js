import { useNavigate } from 'react-router-dom';
// import './SearchBar.css'

import React, { useState } from 'react'

export default function SearchBar() {

    const [term , setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${term}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search: </label>
            <input
             type="text"
             id="search"
             onChange={
                (e) => {setTerm(e.target.value) ;
                console.log("Current Term:", e.target.value); // Debugging
                }
              }
             
             required
             />
        </form>
    </div>
  )
}
