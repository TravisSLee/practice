import { useState } from 'react'
import Dishes from './components/Dishes'
import Form from './components/Form'
const dishList = [
  { 
    id: 1, 
    name: 'Pizza'
  },
  { 
    id: 2, 
    name: 'Cake'
  }
]
function App() {
  
  const [dishes, setDishes] = useState(dishList)
  
  
  
  return (
    <div className="App">
      < Form dishes={dishes} setDishes={setDishes}/>
      < Dishes dishes={dishes} setDishes={setDishes} />
    </div>
  );
}

export default App;
