import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react";
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Item = ({title, price, categories, image, stock, id}) => {
  const {addProductToCart} = useContext(CartContext);
  const {clearCart} = useContext(CartContext);
  const [showButton, setShowButton] = useState(false);
  const onAdd = (count) => {
    console.log(`Se agregaron ${count} empanadas de ${title}`);
    addProductToCart({
      image,
      categories,
      title,
      price,
      stock,
      id,
      count
    });
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
            {/* {!showButton ?
              <ItemCount 
                onAdd={onAdd} 
                stock={stock}
                setShowButton={setShowButton}
              />
              : 
              <button className="border-2 border-black rounded-xl w-full mt-10 font-semibold text-white bg-slate-600 hover:text-lg">
                <Link to="/cart">Confirmar compra</Link>
              </button>} */}
          </div>
      </div>  
    </>
  )
}

export default Item;