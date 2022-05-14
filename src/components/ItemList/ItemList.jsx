import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import list from '../../data/productos';
import IMAGES from './images'; 
import { useParams} from 'react-router-dom';
import { collection, getDocs, getFirestore, query , where } from 'firebase/firestore';

function traerProductos(categoriaid) {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    const queryList = categoriaid && query(
        itemsCollection,
        where('linea', '==', categoriaid)
       
    );
    return getDocs(queryList || itemsCollection);
     {/*
    const myPromise = new Promise((resolve, reject) => {
        const arrayfind = categoriaid ? list.filter( newlist =>  newlist.linea === categoriaid ) : list;
        setTimeout(() => {
            resolve(arrayfind);
        }
        ,2000);
    }       
    );
    return myPromise;*/}
}

function ItemList()  {

    const { categoriaid } = useParams();
    const [productosfiltrados, setProductos] = useState([]);
    useEffect(() => {

        traerProductos(categoriaid).then(snapshot => 
           // console.log(snapshot.docs[1].data())
            setProductos(snapshot.docs.map(
                doc => {
                    return { ...doc.data(), id: doc.id }
                }
            ))
            )
            .catch(err => {
                console.log(err);
            } );
    }, [categoriaid])    

   
    return (
            <div>
        {productosfiltrados.map((item,i) => <Item item={item} key={item.id} />)} 

            </div>
    );
    
}

export default ItemList;