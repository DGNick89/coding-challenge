import Revenue from './components/Revenue'
import Expenses from './components/Expenses'
import GrossProfitMargin from './components/GrossProfitMargin'
import NetProfitMargin from './components/NetProfitMargin'
import WorkingCapitalRatio from './components/WorkingCapitalRatio'
import { useState, useEffect } from "react"
import './App.css'

function App() {


  const [category, setCategory] = useState([])

  useEffect(() => {
    const getData = async () => {
        await fetch('data/data.json')
            .then(res => res.json())
            .then(data => setCategory(data.data))
    }
    getData();
}, [])

 

  return (
    <>
      <Revenue category={category}/>
      <Expenses category={category}/>
      <GrossProfitMargin category={category} />
      <NetProfitMargin category={category} />
      <WorkingCapitalRatio category={category} />
    </>
  )
}

export default App
