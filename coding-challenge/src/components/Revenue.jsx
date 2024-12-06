import { useState } from "react"
import { useEffect } from "react"


export default function Revenue() {

    const [category, setCategory] = useState([])
    const [revenue, setRevenue] = useState([])
    const [expenses, setExpenses] = useState([])    

    useEffect(() => {
        const getData = async () => {
            await fetch('data/data.json')
                .then(res => res.json())
                .then(data => setCategory(data.data))
        }
        getData();
    }, [])
    
function calculateRevenue() {
    setRevenue(category.filter(money => money.account_category === 'revenue'))
    
    
}

function calculateExpenses() {
    setExpenses(category.filter(money => money.account_category === 'expense'))
   
}

const totalExpenses = expenses.reduce((sum, exp) => sum + exp.total_value, 0)
    
    

    return (
        <>
            <div>
                {category.map((data) => (
                    <div key={data.account_code}>
                        {data.account_name}
                    </div>
                ))}
                <div>
                    <button onClick={calculateRevenue} >Revenue</button>
                    <div>
                        {revenue.map(rev => (
                            <div key={rev.account_code}>
                                <h2>{rev.account_name}</h2>
                                <h3>${rev.total_value}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <button onClick={calculateExpenses}>Expenses</button>
                    <div>
                        ${totalExpenses}
                    </div>
                </div>
                
            </div>
            
        </>
    )
}