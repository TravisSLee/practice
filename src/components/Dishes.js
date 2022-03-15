import React from 'react'

export default function Dishes({dishes, setDishes}) {
    function handleDelete(id){
        const newList = dishes.filter((d) => d.id !== id)
        setDishes(newList)
    }
  
  
    return (
    <div>{
        dishes.map((d) => (
            <>
                <div key={d.id} > {d.name} </div>
                <button type="button" onClick={() => handleDelete(d.id)}>Delete this Dish</button>
            </>    
        ))}
        
    </div>
  )
}
