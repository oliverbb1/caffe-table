import React, { createContext, useState } from 'react';

export const CaffeContext = createContext();

export const CaffeProvider = ({children}) => {
    const [howManyTables, setHowManyTables] = useState({length: 4});
    const [guest,setGuest] = useState({
        guestNum: "",
        tableNum: "",
    });
    const [orders, setOrders] = useState([]);
    const [caffeProfit, setCaffeProfit] = useState([]);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const value = {
        reducer,
        caffeProfit,
        setCaffeProfit,
        orders,
        setOrders,
        guest, setGuest,
        howManyTables,
        setHowManyTables
    }
    return (
        <CaffeContext.Provider value={value}>{children}</CaffeContext.Provider>
    )
}