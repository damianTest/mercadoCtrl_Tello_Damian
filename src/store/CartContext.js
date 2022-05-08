import { createContext, useState } from "react";


const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [productosList, setProductosList] = useState([]);
    
    const addProductos = (producto, quantity) => {

        if(isInCart(producto.idProducto)) {
            const productoExistente = getProducto(producto.idProducto);
            quantity = quantity + productoExistente.quantity;
         }
        const newProducto = { ...producto, quantity};
        setProductosList([ ...productosList, newProducto  ]);
    }

    const removeProducto = (productoid) => {
        setProductosList(productosList.filter(newList => newList !== productoid ));
    }

    const isInCart = (productoid) => {
       return getProducto(productoid) ? true : false;
      
    }

    const getProducto = (productoid) => {
       return  productosList.find((producto) => producto.idProducto === parseInt(productoid));
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