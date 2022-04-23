import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import './ItemListContainer.css';


const ItemListContainer = ({props}) =>  

 {
    return (
        <div className='item'>

<ItemCount stock={5} inicial= {0} />
            
        </div>
    );
}

export default ItemListContainer

;