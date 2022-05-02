import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import list from '../../data/productos';
import { useParams} from 'react-router-dom';

function traerProductos(categoriaid) {
    
    const myPromise = new Promise((resolve, reject) => {
      
        setTimeout(() => {
            
            if (categoriaid === undefined) {
                    resolve(list);
            } else {
               
               const arrayfind =  list.filter( (newlist) => {
        
                    return newlist.linea === categoriaid;
                });
                console.log(arrayfind);
             return arrayfind;
              
            }
            
        }
        ,2000);
    }       
    );
    return myPromise;
}

function ItemList()  {

    const { categoriaid } = useParams();
    const [list, setList] = useState([]);
    useEffect(() => {
        traerProductos(categoriaid).then(list => setList(list) );
    }, [categoriaid])    


    return (
            <div>
              {list.map((item,i) => <Item item={item} key={item.idProducto} />)} 
            </div>
    );
    
}

export default ItemList;