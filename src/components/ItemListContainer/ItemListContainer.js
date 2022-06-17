import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import ItemList from '../ItemList/ItemList';
import productsMock from '../../utils/productsMock';
import Loader from '../Loader.js/Loader';

const ItemListContainer =() => {

  const [products, setProducts] = useState([])
  const {category} = useParams()
  const [loading, setLoading] = useState()

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsMock)
      }, 2000)
    })
  }

  useEffect(() => {
    setLoading(true) //--> acá LLAMARÍAMOS al loader para el efecto visual de "cargando"
    getProducts()
    .then((res) => {
      setProducts( category ? res.filter( product => product.categories === category ) : res) //category viene de useParams y categories viene del Mock
    })
    .catch((err) => {})
    .finally(() => { // se ejecuta SIEMPRE (independientemente de que se carguen los productos o fallen)
      setLoading(false)
    })
  }, [category]) // --> esto nos permite que se haga la llamada ÚNICAMENTE cuando se crea el componente (en el ciclo de MONTAJE)
  return (
    <>
      {loading ? (
        <Loader />
        ) : (
          <div>
            <h1 className='text-4xl text-center font-extrabold my-2 italic bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-600 to-yellow-500'>NUESTRAS EMPANADAS</h1>
            <ItemList products={products}/>
          </div>
        )
      }
    </>
  )
}

export default ItemListContainer;