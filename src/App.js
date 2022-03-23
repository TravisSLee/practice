import { useEffect, useState } from 'react'
import Dishes from './components/Dishes'
import Form from './components/Form'
import SearchBar from './components/SearchBar'

const dishList = [
  { 
    id: 1, 
    name: 'Pizza',
    ingredients: [
      "dough",
      "tomato sauce"
    ]
  },
  { 
    id: 2, 
    name: 'Cake',
    ingredients: [
      "eggs",
      "milk"
    ]
  }
]
function App() {
  
  const [dishes, setDishes] = useState(dishList)
  const [query, setQuery] = useState(...dishes)
  
  return (
    <div className="App">
      < Form dishes={dishes} setDishes={setDishes} query={query} setQuery={setQuery}/>
      < SearchBar dishes={dishes} setDishes={setDishes} query={query} setQuery={setQuery}/>
      < Dishes dishes={dishes} query={query} setQuery={setQuery} setDishes={setDishes} />
    </div>
  );
}

export default App;
