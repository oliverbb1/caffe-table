import React, {useContext} from 'react'
import { CaffeContext } from '../ContextProvider'
import './Menu.css'

const Menu = () => {
const {guest, setOrders} = useContext(CaffeContext);

const pastas = [
    {Milanese: 320},
    {Bolognese: 350},
    {Lasagna: 340},
    {Carbonara: 400},
];

const pizzas = [
    { Sicilian: 250 },
    { Caprese: 220 },
    { Pepperoni: 300 },
    { Margherita: 280 },
    { Napoletana: 200 },
];

const drinks = [
    { Cola: 80 },
    { Sprite: 80 },
    { Fanta: 80 },
    { Tea: 50 },
    { Coffe: 60 },
];

const addProduct = (product) => {
    console.log("dodato")
}
return (
    <div className='menu'>
        <div className="products">
            <h4 className='pasta-pizza-drink-menu'>Pasta:</h4>
            {pastas.map((pasta) => (
                <li className='menu-item' onClick={() => addProduct(pasta)}>
                    {Object.keys(pasta)} {" "}
                    {Object.values(pasta)}
                </li>
            ))}
        </div>
        <div className="products">
            <h4 className='pasta-pizza-drink-menu'>Pizza:</h4>
            {pizzas.map((pizza) => (
                <li 
                    className='menu-item' 
                    onClick={() => addProduct(pizza)}>
                    {Object.keys(pizza)} {""}
                    {Object.values(pizza)}
                </li>
            ))}
        </div>
        <div className="products">
            <h4 className='pasta-pizza-drink-menu'>Drinks:</h4>
            {drinks.map((drink) => (
                <li className='menu-item'
                    onClick={() => addProduct(drink)}>
                    {Object.keys(drink)}
                    {Object.keys(drink)}
                </li>
            ))}
        </div>
    </div>
)
}

export default Menu