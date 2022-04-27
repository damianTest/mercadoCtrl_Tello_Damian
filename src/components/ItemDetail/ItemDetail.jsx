import React from 'react';
import './ItemDetail.css';

function ItemDetail({item})  {
    console.log(item);
    
        return (
            <div className='container-Detail'>
                <div className='imagen_wrap'><img src={item.imagen} className='producto'/></div>
   
                <div className='intro' >{item.detalle} <div className='product-price'>{item.precio}</div> </div>
            </div>
        );
    
}

export default ItemDetail;