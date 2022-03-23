import React,{ useState } from 'react'

export default function Form({dishes, setDishes}) {

    const [nameOfDish, setNameOfDish] = useState("")
    const [nameOfIngs, setNameOfIngs] = useState("")
    const [isMousedOver, setMouseOver] = useState(false);
  
    function handleDishChange(event) {
        setNameOfDish(event.target.value);
    }

    function handleChange(e){
      setNameOfIngs(e.target.value);
    }
    
    function handleMouseOver() {
    setMouseOver(!isMousedOver);
    } 
    
    function handleClick(e) {
        
        e.preventDefault();
        if (nameOfDish !== ""  || nameOfIngs !== ""){
            let listOfIng = nameOfIngs.split(",");
            let copy = [...dishes, { id: dishes.length + 1, name: nameOfDish, ingredients: [...listOfIng]}]
            console.log(copy)
            setDishes(copy)
        }
        setNameOfDish("")
        setNameOfIngs("")
       
    }
  
    return (
      <form onSubmit={handleClick}>
        <input
          onChange={handleDishChange}
          type="text"
          placeholder="What's your dish?"
          value={nameOfDish}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your ingridents?"
          value={nameOfIngs}
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
