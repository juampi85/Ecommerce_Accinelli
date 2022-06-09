import { useState } from 'react';

const ItemCount = ({stock, onAdd, setShowButton}) => {
  const [count, setCount] = useState(1)

  return (
      <>
        <div className='flex justify-center font-bold'>
          <button onClick={()=>{setCount(count - 1)}} disabled={count === 1} className="p-1 text-2xl "> - </button>
          <p className="p-1 text-2xl">{count}</p>
          <button onClick={()=>{setCount(count + 1)}} disabled={count === stock} className="p-1 text-2xl"> + </button>
        </div>
          <button onClick={() => setShowButton(true)} onMouseDown={() => onAdd(count)} className='font-bold text-md border-2 border-slate-600 rounded-lg 
          bg-red-200 w-full hover:text-lg'>Agregar al Carrito</button>
      </>
    )
}

export default ItemCount;