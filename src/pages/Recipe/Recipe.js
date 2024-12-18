import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'
import "./Recipe.css"

export const Recipe = () => {
    const { id } = useParams();


    const { data: recipe, isPending, error } = useFetch("http://localhost:3000/recipes/" + id);

    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading!</p>}
            
            <p>{recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime}</p>
                    <ul>
                        {recipe.ingredients.map((ing) => (
                           <li key={ing}>{ing}</li> 
                        ))}
                    </ul>
                    <p className='method'>{recipe.method} </p>
                </>
            )}</p>
        </div>
    )
}
