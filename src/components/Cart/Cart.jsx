import React, {useContext, useState} from 'react';
import CartContextProvider from '../../store/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {productos , clear} = useContext(CartContextProvider);
  

    return (
        <div>
             {productos.map((item) => (
            <CartItem key={item.idProducto} item={item} />
          ))}
           {productos.length > 0 ? (
        <>
          <button onClick={() => clear()}>Vaciar Carrito</button>
         
        </>
      ) : (
        
        <Link to='/'><h1>El carrito esta vacio</h1> Volver al Inicio</Link>
      )}
        </div>
    );
}

export default Cart;