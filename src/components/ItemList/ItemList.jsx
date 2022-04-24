import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import IMAGES from './images';

function traerProductos() {
    
    const myPromise = new Promise((resolve, reject) => {
        
    const list = [
        {idProducto: 1,
        nombre: 'Banana',
        imagen: IMAGES.image1,
        precio: '$180'},
        {idProducto: 2,
        nombre: 'Manzana',
        imagen: IMAGES.image2,
        precio: '$120'},
        {idProducto: 3,
        nombre: 'Pera',
        imagen: IMAGES.image3,
        precio: '$100'}
        ];
        setTimeout(() => {
            resolve(list);
        }
        ,2000);
    }       
    );
    return myPromise;
}

function ItemList()  {

    const [list, setList] = useState([]);
    useEffect(() => {
        traerProductos().then(list => setList(list) );
    }, [])    


    return (
            <div>
              {list.map((item,i) => <Item item={item} key={item.idProducto} />)} 
            </div>
    );
    
}

export default ItemList;