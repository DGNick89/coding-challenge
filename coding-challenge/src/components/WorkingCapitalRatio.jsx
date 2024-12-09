import { useState, useEffect } from "react"


export default function WorkingCapitalRatio({category}) {
    

    const [assets, setAssets] = useState(0)
    const [liabilities, setLiabilities] = useState(0)
    const [capitalRatio, setCapitalRatio] = useState('')
    
    useEffect(() => {
        const assetsTotalSum = category.filter(money => money.account_category === 'assets' && money.value_type === 'debit' && money.account_type === 'current' ||
            money.account_category === 'assets' && money.value_type === 'debit' && money.account_type === 'bank' ||
            money.account_category === 'assets' && money.value_type === 'debit' && money.account_type === 'current_accounts_receivable')

        const calculateAssetsDebit = assetsTotalSum.reduce((sum, money) => sum + money.total_value, 0)        
        
        
        const assetsTotalSubs = category.filter(sub => sub.account_category ==='assets' && sub.value_type === 'credit' && sub.account_type === 'current' ||
            sub.account_category ==='assets' && sub.value_type === 'credit' && sub.account_type === 'bank' ||
            sub.account_category ==='assets' && sub.value_type === 'credit' && sub.account_type === 'current_accounts_receivable' )

        const calculateAssetsCredit = assetsTotalSubs.reduce((sum, money) => sum + money.total_value, 0)
        
        const assetsTotal = calculateAssetsDebit - calculateAssetsCredit
        setAssets(assetsTotal)


        const liabilitiesTotalSum = category.filter(money => money.account_category === 'liability' && money.value_type === 'credit' && money.account_type === 'current' ||
            money.account_category === 'liability' && money.value_type === 'credit' && money.account_type === 'current_accounts_receivable')

        const calculateLiabilityCredit = liabilitiesTotalSum.reduce((sum, money) => sum + money.total_value, 0)
        
        const liabilitiesTotalSubs = category.filter(money => money.account_category === 'liability' && money.value_type === 'debit' && money.account_type === 'current' ||
            money.account_category === 'liability' && money.value_type === 'debit' && money.account_type === 'current_accounts_receivable')
        
        const calculateLiabilityDebit = liabilitiesTotalSubs.reduce((sum, money) => sum + money.total_value, 0)
        
        const liabilitiesTotal = calculateLiabilityCredit - calculateLiabilityDebit
        setLiabilities(liabilitiesTotal)
        
        
        const workingCapitalRatio = (assets / liabilities) * 100
        setCapitalRatio(workingCapitalRatio)
        
        
    }, [category])

    return (
        <>
            <div className="wrapper">
                <h2>Working Capital Ratio</h2>
                <h3>{(Math.round(capitalRatio * 10) / 10).toLocaleString('en-US')}%</h3>
            </div>

        </>
    )
}