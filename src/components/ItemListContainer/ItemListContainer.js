import React from 'react';
import { ItemListContainterTitulo, ContenidoGreeting } from './ItemListContainer.elements';

function ItemListContainer({greeting}) {
    return (
        <>
          <ItemListContainterTitulo>
            <ContenidoGreeting>Bienvenidos al {greeting} !!!</ContenidoGreeting>
          </ItemListContainterTitulo>
        </>
    )
}

export default ItemListContainer;