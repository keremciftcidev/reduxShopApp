
import { calculateTotal } from './control/shopSlice'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ShoppingList from './components/ShoppingList'
import { useSelector,useDispatch } from 'react-redux'


function App() {
  const {shopItems} = useSelector((store)=>store.shop)
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(calculateTotal())
  }, [shopItems])
  
 

  return (

    <div className="App">
      <Navbar/>
      <ShoppingList/>
    </div>
  )
}

export default App
