import { useState } from "react"
import { useEffect } from "react"


export default function Revenue() {

    const [revenue, setRevenue] = useState([])   

    useEffect(() => {
        const getData = async () => {
            await fetch('data/data.json')
                .then(res => res.json())
                .then(data => setRevenue(data.data))
        }
        getData();
    }, [])
    


    
    

    return (
        <>
            <div>
                {revenue.map((data) => (
                    <div key={data.account_code}>
                        {data.account_name}
                    </div>
                ))}
            </div>
            
        </>
    )
}