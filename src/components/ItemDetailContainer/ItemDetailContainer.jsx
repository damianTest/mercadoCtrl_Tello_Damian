import React , { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

import list from '../../data/productos';
import { useParams} from 'react-router-dom';
import { doc,  getDoc,  getDocs, getFirestore } from 'firebase/firestore';

function getItem(id) {
 
    const db = getFirestore();
    const itemRef = doc(db, 'items', id);
    return getDoc(itemRef);
    
{/*
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
*/ }
}

const ItemDetailContainer = () =>  
 {
    const [producto, setProducto] = useState([]);
    const { productoid } = useParams();
    useEffect(() => {
        getItem(productoid).then(snapshot => setProducto(
            {...snapshot.data(), id : snapshot.id}) );
    }, [productoid]) ;

    return (
        <div >
            <ItemDetail item={producto} key={producto.id} />
        </div>
    );
}

export default ItemDetailContainer;