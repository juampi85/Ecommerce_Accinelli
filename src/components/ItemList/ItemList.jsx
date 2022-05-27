import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {

  return (
    <>
      <div>
        { productos.map(({titulo, precio, id, imagen, categoria, stock}) => {
          return (
            <div key={id}>
              <Item titulo={titulo} precio={precio} imagen={imagen} categoria={categoria} stock={stock}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ItemList;