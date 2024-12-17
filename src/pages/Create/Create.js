import React, { useState } from 'react'
import { useEffect } from 'react'
import './Create.css'

export const Create = () => {
    const [title , setTitle] = useState('');
    const [method , setMethod ] = useState('');
    const [cookingTime , setCookingTime] = useState('');

    const handleSubmit = (e) =>{
            e.preventDefault(); //prevent refresh
            console.log(title , method , cookingTime)
    }
  return (
    <div className='create'>
        <h1 className='page-title'>Add a New Recipe</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Recipe Title: </span>
                <input
                type ="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                />
            </label>

            <label>
                <span>Recipe Method</span>
                <textarea
                onChange={(e) => setMethod(e.target.value)}
                value={method}
                required
                />
            </label>

            <label>
                <span>Cooking time</span>
                <input type="number"
                onChange={(e) => setCookingTime(e.target.value)}
                value={cookingTime}
                required
                />
            </label>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}
