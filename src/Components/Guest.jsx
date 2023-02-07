import React from 'react'
import { useContext } from 'react';
import { CaffeContext } from '../ContextProvider'
import './Guest.css';

const Guest = ({guestNum, tableNum, tabels}) => {
    const {orders, setOrders, guest, setGuest } = useContext(CaffeContext);

    const SelectGuest = (guestNum, tableNum) => {
        setGuest({
            guestNum,
            tableNum,
        });
    };

    const removeProduct = (ord) => {
        console.log('remove')
        !tabels[tableNum] &&
            setOrders((prevvState) => prevvState.filter((each) => each !== ord));
    };
return (
    <div className="guest">
        <h5>Guest: {guestNum}: </h5>
        <div className="ordered-products">
            {orders.map(
                (order) =>
                    order.tableNum === tableNum &&
                    order.guestNum === guestNum && (
                        <li
                            onClick={() => removeProduct(order)}
                            key={Math.random() * 1000}
                            className="order"
                        >
                        {Object.keys(order.product)}
                        </li>
                    )
            )}
        </div>
        {tabels[tableNum] ? (
            <h5 className='make-order-disabled'>Bill</h5>
        ) : (
            <h5
                onClick={() => SelectGuest(guestNum, tableNum)}
                className={
                    guest.guestNum === guestNum && guest.tableNum === tableNum
                    ? "make-order-active" :
                    "make-order"
                }
                >
                    Order
                </h5>
        )}
    </div>
)
}

export default Guest