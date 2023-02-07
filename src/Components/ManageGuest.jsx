import React from 'react'
import './ManageGuests.css'

const ManageGuest = ({ howManyGuests, setHowManyGuests }) => {
    const handleIncrement = () => {
        setHowManyGuests((prevv) => ({
            length: prevv.length + 1}))
    }

    const handleDecrement = () => {
        setHowManyGuests((prevv) => ({
            length: prevv.length - 1}))
    }
return (
    <div className='add-remove-guest'>
        <button onClick={handleDecrement}>&#8722;</button>
        <button>{howManyGuests.length}</button>
        <button onClick={handleIncrement}>+</button>

    </div>
)
}

export default ManageGuest