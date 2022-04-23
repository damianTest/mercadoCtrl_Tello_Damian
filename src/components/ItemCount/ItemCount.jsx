import React, {useState} from 'react';


function ItemCount({stock, inicial, onAdd}) {
    const [count, setCount] = useState(inicial);
    const handleSuma = () => {
        if (count < stock) {
            setCount(count + 1);
        } 
        
    }
    const handleResta = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }


    return (
        <div>
             <div>
                <button onClick={() => handleResta()}>-</button>
                <input readOnly value={count}/>
                <button onClick={() =>handleSuma()}>+</button>
               </div>
              <button >Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;