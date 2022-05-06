import React, {useState} from 'react';


function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    function handleSuma () {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleResta () {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div >
            <div>
                <button onClick={() => handleResta()}>-</button>
                <input readOnly value={count}/>
                <button onClick={() =>handleSuma()}>+</button>
            </div>
            <button onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;