import React, { useContext } from 'react';
import './CartWidget.css';
import imgcar  from './ecart_icon_principal.png';
import CartContextProvider from '../../store/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {totalCount} = useContext(CartContextProvider);
    return (
        <div className='total-cart'> 
                <Link to='/cart/' >
              <img src={imgcar}  alt='Carrito' className='icon-cart'/>
              </Link>
              <div >{totalCount()}</div>

        </div>
    );
}

export default CartWidget;