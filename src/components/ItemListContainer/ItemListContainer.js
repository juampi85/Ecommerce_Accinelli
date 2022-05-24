import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ItemListContainterTitulo, ContenidoGreeting } from './ItemListContainer.elements';

function ItemListContainer({greeting}) {
    return (
        <>
          <ItemListContainterTitulo className='p-5'>
            <div className='border-solid border-2 border-indigo-600 my-auto p-5'>
              <ContenidoGreeting>Bienvenidos al {greeting} !!!</ContenidoGreeting>
              <ItemCount 
              stock={5}/>
            </div>
          </ItemListContainterTitulo>
        </>
    )
}

export default ItemListContainer;