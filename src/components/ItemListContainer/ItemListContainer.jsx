import React from 'react';

import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = ({props}) =>  

 {
    return (
        <div className='item'>
            <ItemList />
           {/* <ItemCount stock={5} inicial= {0} />*/}
           
        </div>
    );
}

export default ItemListContainer

;