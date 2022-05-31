import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({titulo, precio, categoria, imagen, stock}) => {

  const onAdd = (count) => {
    console.log(`Se agregaron ${count} empanadas de ${titulo}`);
  }
  return (      
    <>  
      <div className='flex flex-col items-center border-2 border-black rounded-lg'>
        <img src={imagen} alt="Empanada de Jamón y queso" className="object-cover rounded-lg shadow-md" />    
        {/* <div className="border-2 border-slate-600 relative"> */}
          <div className="border-2 border-orange-600 bg-slate-200 w-4/5 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {categoria}
              </div>  
            </div>
              <h4 className="mt-1 text-xl font-semibold uppercase text-center leading-tight truncate">{titulo}</h4>
            <div className="mt-1 flex justify-center">
              $ {precio} / ({stock} disponibles)
            </div>
              <ItemCount onAdd={onAdd} stock={stock}/>
          </div>
        {/* </div> */}
      </div>  
    </>
  )
}

export default Item;