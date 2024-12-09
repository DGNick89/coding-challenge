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
      <section className='logo'>
        <img src="https://www.rewardpay.com.au/images/rewardpay-300x150.jpg" alt="" />
      </section>
      <div className="grid-container">
        <Revenue category={category}/>
        <Expenses category={category}/>
        <GrossProfitMargin category={category} />
        <NetProfitMargin category={category} />
        <WorkingCapitalRatio category={category} />
      </div>
    </>
  )
}

export default App
