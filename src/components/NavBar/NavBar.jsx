import React from 'react';
import './NavBar.css';
import CartWidget from '../CardWidget/CartWidget';


function NavBar(props) {
    return (
        <div>
           
            <ul className='nav'>
                <h1>Mercado Ctl</h1>
                <a href='#'>Linea de Producto</a>
                <a href='#'>Productos</a>
                <a href='#'>Consultar Ticket</a>
                <CartWidget/>
            </ul>
           
        </div>
      
    );
}

export default NavBar;