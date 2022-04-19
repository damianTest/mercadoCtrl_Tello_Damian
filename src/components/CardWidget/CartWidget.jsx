import React from 'react';
import './CartWidget.css';
import imgcar  from './ecart_icon_principal.png'

const CartWidget = () => {
    return (
        <div>
              <img src={imgcar} alt='Carrito' className='icon-cart'/>
        </div>
    );
}

export default CartWidget;