import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.css'
import { projectFirestore } from '../../firebase/config';



export const Create = () => {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const goBackToHome = useNavigate()
    


    const handleSubmit = async(e) => {
        e.preventDefault(); //prevent refresh
        const doc = {
            title,
            ingredients,
            method,
            cookingTime: cookingTime + ' minutes'
        }

        try{
            await projectFirestore.collection('recipes').add(doc);
            goBackToHome('/');
        }catch(err){
            console.log(err)
        }
    }

    

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim(); //removes white space

        if(ing && !ingredients.includes(ing)){

            setIngredients(prevIngredients => [...prevIngredients , ing]);
        }
        setNewIngredient('');
        ingredientInput.current.focus()
    }
    return (
        <div className='create'>
            <h1 className='page-title'>Add a New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title: </span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe ingredients: </span>

                    <div className='ingredients'>
                    <input type="text" 
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    ref={ingredientInput}
                    />
                    <button className='btn' onClick={handleAdd} >Add</button>
                    </div>
                </label>
                <div>
                    <p>Current Ingredients: {ingredients.map((ing) => (
                        <em key={ing}>{ing}, </em>
                    ))}
                    </p>
                </div>

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
