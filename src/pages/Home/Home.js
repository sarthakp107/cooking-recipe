import React, { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'
import RecipeList from '../../components/RecipeList'


export default function  Home() {

  const [data,setData] = useState(null);
  const [isPending , setIsPending] = useState(false);
  const [error , setError] = useState(false);

useEffect(() => {
//start the fetching of the data
setIsPending(true);

projectFirestore.collection('recipes').get().then(snapshot =>{
  if(snapshot.empty){
    setError("No recipes found...");
    setIsPending(false);
  }
  else{
    let results = [];
    snapshot.docs.forEach(doc => {
      results.push({ ...doc.data() ,id: doc.id });
    })
    // console.log(results);
    setData(results);
    setIsPending(false);
  }
}).catch(err => {
  setError(err.message);
  setIsPending(false);
})
}, [])

  return (
    <div className='home'>
        {isPending && <div className='loading'>Loading!</div>}
        {error && <div className='error'> Error{error}</div>}
        <div className="card">
            {data && <RecipeList recipes= {data}/>}
        </div>
    </div>
  )
}
