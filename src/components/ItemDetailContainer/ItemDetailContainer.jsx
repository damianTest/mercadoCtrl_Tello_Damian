import React , { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import IMAGES from '../ItemList/images';


function getItem() {
    
    const myPromise = new Promise((resolve, reject) => {
        
    const list = [
        {idProducto: 1,
        nombre: 'Manzana',
        imagen: IMAGES.image2,
        detalle: 'La manzana es una de las frutas más completas y saludables que puedes consumir, y es que tal y como indica el refrán inglés, "an apple a day keeps the doctor away", comer una manzana al día mantiene al médico lejos de ti.',
        precio: '$120'}
        ];
        setTimeout(() => {
            resolve(list);
        }
        ,2000);
    }       
    );
    return myPromise;
}

const ItemDetailContainer = () =>  

 {

    const [list, setList] = useState([]);
    useEffect(() => {
        getItem().then(list => setList(list) );
    }, []) 

    return (
        <div >
            {list.map((item,i) => <ItemDetail item={item} key={item.idProducto} />)}
           
        </div>
    );
}

export default ItemDetailContainer

;