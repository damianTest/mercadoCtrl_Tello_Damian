import React from 'react';
import './Item.css';

function Item({item})  {
    console.log(item);
        return (
            <div className='tarj'>
                <div className='titulo'>{item.nombre}</div>
                <div className='detalle'>
                    <div >
                        <img src={item.imagen} className='producto'/>
                    </div>
                </div>
                <div className='comentario'>{item.precio}</div>
            </div>
        );
    
}

export default Item;