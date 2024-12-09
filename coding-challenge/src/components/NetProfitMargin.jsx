import { useEffect, useState } from "react"



export default function NetProfitMargin({category}) {

    const [netProfitMargin, setNetProfitMargin] = useState([])
    const [revenue, setRevenue] = useState([])
    const [expenses, setExpenses] = useState([])


    useEffect(() => {
        const calculateRevenue = category.filter(money => money.account_category === 'revenue')
        setRevenue(calculateRevenue)
        const calculateExpenses = category.filter(money => money.account_category === 'expense')
        setExpenses(calculateExpenses)


        const revenueTotalValue = revenue.reduce((sum, total) => sum + total.total_value, 0)
        const ExpensesTotalValue = expenses.reduce((sum, exp) => sum + exp.total_value, 0)
        
        const totalNetProfitMargin = (revenueTotalValue - ExpensesTotalValue) / revenueTotalValue * 100
        setNetProfitMargin(Number(totalNetProfitMargin))
      
    }, [category])

    

    
    
    

    return (
        <>
        <div>
            <h2>Net Profit Margin</h2>
            {(Math.round(netProfitMargin * 10) / 10).toLocaleString('en-US')}%
        </div>
        </>
    )
}