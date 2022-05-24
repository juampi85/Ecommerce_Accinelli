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
        </>
    )
}

export default ItemCount;