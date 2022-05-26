import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto}) => {
  const {titulo, precio, categoria, id, imagen, stock} = producto

  const onAdd = (count) => {
    console.log(`Se agregaron ${count} empanadas de ${titulo}`);
  }
  return (      
    <>  
      <div>
        <img src={imagen} alt="Empanada de Jamón y queso" className="w-full object-cover object-center h-auto w-auto rounded-lg shadow-md" />    
        <div className="relative px-3 -mt-16  ">
          <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline justify-center">
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {categoria}
              </div>  
            </div>
              <h4 className="mt-1 text-xl font-semibold uppercase text-center leading-tight truncate">{titulo}</h4>
            <div className="mt-1 flex justify-center">
              $ {precio}
            </div>
              <ItemCount onAdd={onAdd} stock={stock}/>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Item;