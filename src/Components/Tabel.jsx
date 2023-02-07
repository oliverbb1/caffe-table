import React from 'react'
import { useContext, useState } from 'react'
import ManageGuests from './ManageGuest'
import Guest from './Guest'
import './Tabel.css'
import { CaffeContext } from '../ContextProvider'

const Tabel = ({tableNum}) => {
    const [tabels, setTabels] = useState({});
    const [open, setOpen] = useState(false);
    const [howManyGuests, setHowManyGuests] = useState({ length: 4});
    
    const {orders,setOrders, setCaffeProfit,reducer, setGuest} = useContext(CaffeContext)

    const guestPrice = orders.map(
        (order) => (
            tableNum === order. tableNum &&
            Object.values(order.product).reduce(reducer)
        )
    )

    const tablePrice = guestPrice.length && guestPrice.reduce(reducer);

    const Complete = (tNum) => {
        setGuest({
            guestNum: "",
            tableNum: "",
        });
        setTabels({...tabels, [tNum]: true});
    }

    const payABill = (tNum) => {
        setCaffeProfit((prevvState) => [...prevvState, tablePrice]);
        setOrders((prevvState) => (
            prevvState.filter((each) => each.tableNum !== tNum)
        ))
        setTabels({...tabels, [tNum]: true});
    }

    const guests = Array.from(howManyGuests);
    return (
        <div className="tabel-container">
            <div className="tabel-header">
                <div>Number of tabel: {tableNum}</div>
                <div className="add-guest-dropdown-icon"
                onClick={() => setOpen(!open)}
                >
                    &#8860;
                </div>
            </div>
            {open && (
                <div className="guest-dropdown">
                    <h4>Num of Guests</h4>
                    <ManageGuests
                        howManyGuests={howManyGuests}    
                        setHowManyGuests={setHowManyGuests}
                    />
                    <h4 className='guest-drop-done' onClick={() => setOpen(!open)}>
                        Done
                    </h4>
                </div>
            )}
            <div className="tabel">
                <div className="guests-container">
                    {guests.map((_,idx) => (
                        <Guest
                            key={idx + 1}
                            guestNum={idx + 1}
                            tableNum={tableNum}
                            tabels={tabels}
                        />
                    ))}
                </div>
                <div className="tabel-buttons">
                    <button
                        onClick={() => Complete(tableNum)}
                        className={tabels[tableNum] ? "disabled-button" : ""}
                    >
                        Complete
                    </button>
                    <button
                        className={tabels[tableNum] ? "" : "disabled-button"}
                        onClick={() => payABill(tableNum)}
                    >
                        Pay
                    </button>
                </div>
                <div className="tabel-bill">
                    <h5>Total bill:</h5>
                    <h5
                        className={!tabels[tableNum] ? "tabel-price" : "tabel-price-to-pay"}
                    >
                        {tablePrice && tablePrice}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Tabel