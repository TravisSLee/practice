import React,{ useState } from 'react'

export default function Form({dishes, setDishes}) {

    const [nameOfDish, setNameOfDish] = useState("")
    const [isMousedOver, setMouseOver] = useState(false);
  
    function handleChange(event) {
        setNameOfDish(event.target.value);
    }
    
    function handleMouseOver() {
    setMouseOver(!isMousedOver);
    } 
    
    function handleClick(e) {
        
        e.preventDefault();
        if (nameOfDish !== ""){

            let copy = [...dishes, { id: dishes.length + 1, name: nameOfDish}]
            setDishes(copy)
            
        }
        setNameOfDish("")
        console.log(dishes)
       
    }
  
    return (
    <form onSubmit={handleClick}>
    <input
      onChange={handleChange}
      type="text"
      placeholder="What's your dish?"
      value={nameOfDish}
    />
    <button
      style={{ backgroundColor: isMousedOver ? "Yellow" : "white" }}
      type="submit"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOver}
    >
      Submit
    </button>
  </form>
  )
}
