import React , { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

import list from '../../data/productos';
import { useParams} from 'react-router-dom';

function getItem(id) {
    
    const myPromise = new Promise((resolve, reject) => {
           
        setTimeout(() => {
            const producto = list.find( (productos) => {
                    return parseInt(id) === productos.idProducto;
            }
            );
             resolve(producto);
        }
        ,2000);
    }       
    );
    return myPromise;
}

const ItemDetailContainer = () =>  
 {
    const [producto, setProducto] = useState([]);
    const { productoid } = useParams();
    useEffect(() => {
        getItem(productoid).then(producto => setProducto(producto) );
    }, [productoid]) ;

    return (
        <div >
            <ItemDetail item={producto} key={producto.idProducto} />
        </div>
    );
}

export default ItemDetailContainer;