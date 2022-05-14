import React, { useContext } from 'react';
import CartContextProvider from '../../store/CartContext';

const CartItem = ({ item }) => {
  const {removeProducto} = useContext(CartContextProvider);

    return (
      <div>
        <h1>{item.nombre}</h1>
        <h4>Unidades: {item.quantity} </h4>
        <h4>Precio unitario: ${item.precio }</h4>
        <h4>Total: ${parseFloat( item.precio ) * parseInt( item.quantity) }</h4>
        <button onClick={() => removeProducto(item.id)}>Remover Producto</button>
      </div>
    );
  };
  
  export default CartItem;