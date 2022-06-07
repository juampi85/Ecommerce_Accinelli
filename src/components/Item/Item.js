import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

const Item = ({title, price, categories, image, stock, id}) => {

  const onAdd = (count) => {
    console.log(`Se agregaron ${count} empanadas de ${title}`);
  }
  
  return (      
    <>  
      <div className='flex flex-col items-center border-2 border-black rounded-lg'>
        <img src={image} alt={title} className="object-cover rounded-lg shadow-md" />    
          <div className="border-2 border-orange-600 bg-slate-200 w-4/5 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {categories}
              </div>  
            </div>
              <h4 className="mt-1 text-xl font-semibold uppercase text-center leading-tight truncate">{title}</h4>
            <div className="mt-1 flex justify-center">
              $ {price} / ({stock} disponibles)
            </div>
            <div>
              <button className='border-2 border-black rounded-lg w-full mt-1 bg-blue-200 font-semibold text-md'>
                <Link to={`/detalle/${id}`}>Ver detalle</Link>
              </button>
            </div>
              <ItemCount onAdd={onAdd} stock={stock}/>
          </div>
      </div>  
    </>
  )
}

export default Item;