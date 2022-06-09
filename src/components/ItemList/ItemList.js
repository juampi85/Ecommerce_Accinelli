import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {

  return(
    <>
      <div className='grid grid-cols-4 border-8 border-red-700 gap-1 rounded-xl'>
        { products.map(({title, price, id, image, categories, stock, description}) => {          
          return (
            <div key={id}>
              <Item title={title} price={price} image={image} categories={categories} stock={stock} id={id} description={description}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ItemList;