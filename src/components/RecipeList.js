import React from 'react'
import "./RecipeList.css"
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function RecipeList({recipes}) {
  const {mode } = useTheme();

    if(recipes.length === 0 ){
        return <div className='error'>No Recipes to load</div>
      }
  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
                    <div key={recipe.id} className={`card ${mode}`}>
                          <h3>{recipe.title}</h3>
                           <p>Time Taken : {recipe.cookingTime}</p>
                          <div>{recipe.method.substring(0 ,100)}...</div>
                          <Link to={`/recipes/${recipe.id}`} className='cook-this'>Cook this</Link>
                    </div>
                ))}
    </div>
  )
}
