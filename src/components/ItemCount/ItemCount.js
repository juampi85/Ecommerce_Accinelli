import { useState } from 'react';

const ItemCount = ({stock}) => {
  const [count, setCount] = useState(0)

    return (
        <>
            <p className='text-lg text-cyan-900 font-bold'>Cuántas empanadas va llevar? Tenemos {stock} disponibles</p>
          <div className='flex justify-center font-bold'>
            <button onClick={()=>{setCount(count - 1)}} disabled={count === 0} className="p-1 text-8xl text-red-600"> - </button>
            <p className="p-1 text-8xl">{count}</p>
            <button onClick={()=>{setCount(count + 1)}} disabled={count === stock} className="p-1 text-8xl text-blue-600"> + </button>
          </div>
          <div className='flex justify-center'>
            <button onClick={() => {console.log(`Usted acaba de comprar ${count} empanadas de las mejores del mercado....sépase afortunad@`)}} disabled={count === 0} className='font-bold text-xl border-4 border-slate-600 rounded-lg p-1 bg-orange-400 hover:scale-110 hover:bg-slate-400 hover:text-fuchsia-800'>COMPRAR</button>
          </div>
        </>
    )
}

export default ItemCount;