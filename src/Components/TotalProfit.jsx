import React, {useContext} from 'react'
import './TotalProfit.css'
import { CaffeContext } from '../ContextProvider'

const TotalProfit = () => {
const {caffeProfit, reducer} = useContext(CaffeContext);
const profit = caffeProfit.length && caffeProfit.reduce(reducer);

return (
    <div className='total-profit'>
        <h1 className='profit'>Caffe Profit:</h1>
        <h1 className='profit-amount'>{profit}</h1>
    </div>
)
}

export default TotalProfit