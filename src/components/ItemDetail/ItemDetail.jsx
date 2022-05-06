import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({item})  {

    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd);
    }
      
        return (
            <div className='container-Detail'>
                <div className='imagen_wrap'><img src={item.imagen} className='producto'/></div>
                
                <div className='intro' >{item.detalle} <div className='product-price'>{item.precio}</div> 
       <div >
                    {cantidadDeProductos ?
                         <button><Link to='/cart/' >Terminar compra ({ cantidadDeProductos } items)</Link></button> :
                         <ItemCount initial={1} stock={item.cantidad} onAdd={addHandler} />
                    }
                </div>
                </div>
            </div>
        );
    
}

export default ItemDetail;