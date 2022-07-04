import Item from '../Item/Item';

const ItemList = ({products}) => {

  return(
    <>
      <div className='grid grid-cols-4 gap-2 rounded-xl mx-1'>
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