import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Recipe.css"
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';



export const Recipe = () => {
    const { id } = useParams();
    const {mode} = useTheme();


    const [isPending , setIsPending] = useState(false);
    const [recipe , setRecipe] = useState(null);
    const [error , setError] = useState(false);

    useEffect(() => {
        setIsPending(true);
        projectFirestore.collection('recipes').doc(id).get().then((doc)=> {
            if(doc.exists){
                setIsPending(false);
                setRecipe(doc.data());
            }
            else{
                setIsPending(false);
                setError("could not find theat recipe SORRYYY");
            }
        })
    },[id])

    return (
        <div className={`recipe ${mode}`}>
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
