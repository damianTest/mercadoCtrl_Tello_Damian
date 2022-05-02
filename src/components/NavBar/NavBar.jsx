import React from 'react';
import './NavBar.css';
import CartWidget from '../CardWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
           
            <ul className='nav'>
                <h1>Mercado Ctl</h1>
                <Link to='/'>Inicio</Link>
                <Link to='/categoria/Frutas'>Frutas</Link>
                <Link to='/categoria/Verduras'>Verduras</Link>
              
                <CartWidget/>
            </ul>
           
        </div>
      
    );
}

export default NavBar;