import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {

  return (
    <>
      <div className='grid grid-cols-4 border-8 border-red-700 gap-1 rounded-xl'>
        { productos.map(({titulo, precio, id, imagen, categoria, stock, descripcion}) => {
          
          return (
            <div key={id}>
              <Item titulo={titulo} precio={precio} imagen={imagen} categoria={categoria} stock={stock} id={id} descripcion={descripcion}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ItemList;