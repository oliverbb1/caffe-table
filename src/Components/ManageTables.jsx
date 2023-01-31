import React from 'react'
import './ManageTables.css'
import { CaffeContext } from '../ContextProvider'
import { useContext } from 'react'
// import { BsPlusSquare } from 'react-icons/bs'
// import { CiCircleMinus } from 'react-icons/ci'

const ManageTables = () => {
    const {howManyTables, setHowManyTables} = useContext(CaffeContext);
    const handleIncrement = () => {
        setHowManyTables((prev) => ({
            length: prev.length + 1
        }));
    }
    const handleDecrement = () => {
        setHowManyTables((prev) => ({
            length: prev.length - 1
        }));
    }
return (
    <div className='add-remove-tables'>
        <button onClick={handleDecrement}>&#8722;</button>
        <button>{howManyTables.length}</button>
        <button onClick={handleIncrement}>+</button>
    </div>
)
}

export default ManageTables