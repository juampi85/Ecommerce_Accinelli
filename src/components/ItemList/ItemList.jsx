import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productosMock}) => {

  return (
    <>
      <div className="wrapper w-11/12 bg-gray-400 antialiased text-gray-900 mt-8 grid grid-cols-4 gap-2 px-2">
        { productosMock.map((producto) => {
          return (
            <div>
              <Item producto={producto} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ItemList;