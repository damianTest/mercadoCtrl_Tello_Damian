import { createContext, useState } from "react";


const CartContext = createContext({
    
});

export const CartContextProvider = ({ children }) => {
    const [productosList, setProductosList] = useState([]);
    
    const addProductos = (producto, quantity) => {
        setProductosList(producto, ...productosList);
    }

    const removeProducto = (productoid) => {
        setProductosList(productosList.filter(newList => newList !== productoid ));
    }

    const isInCart = (productoid) => {
       return productosList.find((producto) => producto.idProducto === parseInt(productoid)) ? true : false;
      
    }

    const clear = () => {
        setProductosList([]);
    }

    return (
        <CartContext.Provider value={{
            productos: productosList,
            addProductos: addProductos,
            removeProducto: removeProducto,
            clear: clear,
            isInCart: isInCart
        }}>
            { children }
        </CartContext.Provider>
    )
} 

export default CartContext;