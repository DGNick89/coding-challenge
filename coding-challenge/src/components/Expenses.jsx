import { useEffect, useState } from "react"

export default function Expenses({category}) {

    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        const calculateExpenses = category.filter(money => money.account_category === 'expense')
        setExpenses(calculateExpenses)
    }, [category])
    

    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.total_value, 0)

    return (
        <>
            
            <div className="wrapper">
                <h2>Expenses</h2>
                <h3>${(totalExpenses).toLocaleString('en-US')}</h3>
            </div>
            
        </>
    )
}