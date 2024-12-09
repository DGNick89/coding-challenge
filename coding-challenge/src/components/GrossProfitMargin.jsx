import { useEffect, useState } from "react"



export default function GrossProfitMargin({category}) {

    const[totalSales, setTotalSales] = useState([])
    const [revenue, setRevenue] = useState([])

    useEffect(() => {
        const calculateGrossProfit = category.filter(money => money.account_type === 'sales' && money.value_type === 'debit')
        setTotalSales(calculateGrossProfit)
        const calculateRevenue = category.filter(money => money.account_category === 'revenue')
        setRevenue(calculateRevenue)
    }, [category])

    const grossTotalValue = totalSales.reduce((sum, profit) => sum + profit.total_value, 0)
    const revenueTotalValue = revenue.reduce((sum, total) => sum + total.total_value, 0)
    const grossProfitMargin = grossTotalValue / revenueTotalValue * 100


    return (
        <>
            <div>
                <h2>Gross Profit Margin</h2>
                {(Math.round(grossProfitMargin * 10) / 10).toLocaleString('en-us')}%
            </div>
        </>
    )

}