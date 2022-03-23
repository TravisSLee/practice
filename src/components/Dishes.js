import React from 'react'

export default function Dishes({dishes, setDishes, query}) {
    function handleDelete(id){
        const newList = dishes.filter((d) => d.id !== id)
        setDishes(newList)
    }
  
  
    return (
    <div>{
        query.map((q) => (
            <>
                <div key={q.id} > {q.name} </div>
                <div>Ingredients:</div>
                {q.ingredients.map((i,index) => (
                    <div key={index}>{i}</div>
                ))} 
                <button type="button" onClick={() => handleDelete(q.id)}>Delete this Dish</button>
            </>    
        ))}
        
    </div>
  )
}
