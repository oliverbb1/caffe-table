import React from 'react'
import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import './Header.css'
import ManageTables from './ManageTables'

const Header = () => {
const [open, setOpen] = useState(false);
return (
    <div>
        <header>
            <h3>Caffe</h3>
            <div className='dropdown-container'>
                <div onClick={() => setOpen(!open)} className="add-table-icon">
                    <IoMdArrowDropdown />
                </div>
                {open && (
                    <div className='tabels-dropdown'>
                        <h4 className='tabels-drop-header'>Num of Tabels</h4>
                        <ManageTables />
                        <h4 className='tabels-drop-done' onClick={() => setOpen(!open)}>Done</h4>
                    </div> 
                )}
            </div>
        </header> 
    </div>
)
}

export default Header