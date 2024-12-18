import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';


export default function Search() {
    // const queryString = useLocation().search;  //qurey string ?q=
    // const queryParams = new URLSearchParams(queryString) //allows us to use GET
    // const query  = queryParams.get('q')

    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')

    const url = ('http://localhost:3000/recipes?q=' + query);

    
    const {error , isPending , data} = useFetch(url);
    console.log("Query:", query);
console.log("URL:", url);
    console.log(data);

  return (
    <div>
        <h2 className='page-title'> Recipes including "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'> Loading ...</p>}
        {data && <RecipeList recipes={data}/>}
    </div>
  )
}
