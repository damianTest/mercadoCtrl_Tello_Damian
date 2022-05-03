import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item({item})  {

        return (
            <div className='tarj'>
                <div className='titulo'>{item.nombre}</div>
                <div className='detalle'>
                    <div >
                        <img src={item.imagen} className='producto'/>
                    </div>
                </div>
                <div className='comentario'>{item.precio}
                
                </div>
                <div>
                
                   <Link to={'/linea/' + item.idProducto}> 
                     <button>Ver mas....</button>
                      </Link> 
                     </div> 
            </div>
        );
    
}

export default Item;