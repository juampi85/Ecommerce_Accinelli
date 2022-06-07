import { useState } from 'react';

const ItemCount = ({stock, onAdd}) => {
  const [count, setCount] = useState(1)

    return (
        <>
          <div className='flex justify-center font-bold'>
            <button onClick={()=>{setCount(count - 1)}} disabled={count === 1} className="p-1 text-2xl "> - </button>
            <p className="p-1 text-2xl">{count}</p>
            <button onClick={()=>{setCount(count + 1)}} disabled={count === stock} className="p-1 text-2xl"> + </button>
          </div>
          <div className='flex justify-center'>
            <button onClick={() => onAdd( count )} className='font-bold text-md border-2 border-slate-600 rounded-lg bg-red-200 hover:scale-110 hover:bg-sky-700 hover:text-amber-400 hover:px-1'>COMPRAR</button>
          </div>
        </>
    )
}

export default ItemCount;