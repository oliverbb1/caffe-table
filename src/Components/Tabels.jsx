import React from 'react'
import { useContext } from 'react'
import { CaffeContext } from '../ContextProvider'
import Tabel from './Tabel'
import './Tabels.css'

const Tabels = () => {
    const {howManyTables} = useContext(CaffeContext);

    const tabels = Array.from(howManyTables);
    // console.log(tabels);

    return (
        <div className='tabels'>
            {tabels.map((item,id) => (
                <Tabel key={id+1} tableNum={id+1} />
            ))}
        </div>
)
}

export default Tabels