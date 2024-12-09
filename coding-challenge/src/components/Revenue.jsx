import { useEffect, useState } from "react"


export default function Revenue({category}) {

   
    const [revenue, setRevenue] = useState([])
        

    useEffect(() => {
        const calculateRevenue = category.filter(money => money.account_category === 'revenue')
        setRevenue(calculateRevenue)
    }, [category])
        
    const revenueTotalValue = revenue.reduce((sum, total) => sum + total.total_value, 0)
        
    
    

    return (
        <>
            <div>
                <h2>Revenue</h2>                
                ${revenueTotalValue}
            </div>
            
        </>
    )
}