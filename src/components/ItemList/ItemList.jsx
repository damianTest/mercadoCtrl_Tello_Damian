import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import list from '../../data/productos';
import { useParams} from 'react-router-dom';

function traerProductos(categoriaid) {
    
    const myPromise = new Promise((resolve, reject) => {
        const arrayfind = categoriaid ? list.filter( newlist =>  newlist.linea === categoriaid ) : list;
        setTimeout(() => {
            resolve(arrayfind);
           {/* if (c === undefined) {
                    resolve(list);
            } else {
               
               const arrayfind =  list.filter( (newlist) => {
        
                    return newlist.linea === categoriaid;
                });
                console.log(arrayfind);
             return arrayfind;
              
            }
            */}
        }
        ,2000);
    }       
    );
    return myPromise;
}

function ItemList()  {

    const { categoriaid } = useParams();
    const [productosfiltrados, setProductos] = useState([]);
    useEffect(() => {
        traerProductos(categoriaid).then(myPromise => 
            setProductos(myPromise) );
    }, [categoriaid])    


    return (
            <div>
 {console.log('div ss:' + productosfiltrados.length)};
           {productosfiltrados.map((item,i) => <Item item={item} key={item.idProducto} />)} 
 
            </div>
    );
    
}

export default ItemList;