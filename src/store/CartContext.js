import { createContext, useState } from "react";


const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [productosList, setProductosList] = useState([]);
    
    const addProductos = (producto, quantity) => {

        if(isInCart(producto.id)) {
            const productoExistente = getProducto(producto.id);
            quantity = quantity + productoExistente.quantity;
         }
        const newProducto = { ...producto, quantity};
        setProductosList([ ...productosList, newProducto  ]);
      
    }

    const removeProducto = (productoid) => {
        setProductosList(productosList.filter(newList => newList.id !==  productoid ));
    }

    const isInCart = (productoid) => {
       return getProducto(productoid) ? true : false;
      
    }

    const getProducto = (productoid) => {
       return  productosList.find((producto) => producto.id === productoid);
    }

    const clear = () => {
        setProductosList([]);
    }

    const totalCount = () => {
        return productosList.reduce((total, item) => total + item.quantity, 0);
      };

    return (
        <CartContext.Provider value={{
            productos: productosList,
            addProductos: addProductos,
            removeProducto: removeProducto,
            clear: clear,
            isInCart: isInCart,
            totalCount: totalCount
        }}>
            { children }
        </CartContext.Provider>
    )
} 

export default CartContext;