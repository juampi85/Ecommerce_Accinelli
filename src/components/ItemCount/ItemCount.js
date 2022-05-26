import { useState } from 'react';

const ItemCount = ({stock, onAdd}) => {
  const [count, setCount] = useState(1)

    return (
        <>
            <p className='text-lg text-cyan-900 font-bold'>Cuántas empanadas va llevar? Tenemos {stock} disponibles</p>
          <div className='flex justify-center font-bold'>
            <button onClick={()=>{setCount(count - 1)}} disabled={count === 1} className="p-1 text-2xl "> - </button>
            <p className="p-1 text-2xl">{count}</p>
            <button onClick={()=>{setCount(count + 1)}} disabled={count === stock} className="p-1 text-2xl"> + </button>
          </div>
          <div className='flex justify-center'>
            <button onClick={() => onAdd( count )} className='font-bold text-md border-2 border-slate-600 rounded-lg bg-slate-300 hover:scale-110 hover:bg-slate-400 hover:text-fuchsia-800'>COMPRAR</button>
          </div>
        </>
    )
}

export default ItemCount;