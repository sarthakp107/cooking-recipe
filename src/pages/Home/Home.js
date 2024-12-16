import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList';

export  const Home = () => {

    const {data: recipes, isPending , error} = useFetch("http://localhost:3000/recipes");

  return (
    <div className='home'>
        {isPending && <div className='loading'>Loading!</div>}
        {error && <div className='error'> Error{error}</div>}
        <div className="card">
            {recipes && <RecipeList recipes= {recipes}/>}
        </div>
    </div>
  )
}
