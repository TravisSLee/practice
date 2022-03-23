import React, { useState } from 'react'

export default function SearchBar({dishes, setDishes, query, setQuery}) {
    const [search, setSearch] = useState("")

    function handleChange(e){
        setSearch(e.target.value)
    }
    
    function handleClick(e){
        e.preventDefault();
        
        let searchResult = []
        if (search !== ""){
            dishes.map((d) => {
                d.ingredients.map((i) =>{
                    if (i === search){
                        searchResult.push(d)
                    }
                })
            })
        }
        setQuery(searchResult)
    }
    return (
        <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What ingredients do you have?"
          value={search}
        />
        <button
        //   style={{ backgroundColor: isMousedOver ? "Yellow" : "white" }}
          type="submit"
        //   onMouseOver={handleMouseOver}
        //   onMouseOut={handleMouseOver}
        >
          Search
        </button>
    </form>
  )
}
