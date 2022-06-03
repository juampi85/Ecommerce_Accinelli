import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import productsMock from '../../utils/productsMock';
import { useParams } from "react-router-dom";

const ItemListContainer =() => {

  const [productos, setProductos] = useState([])
  const {category} = useParams()
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(productosMock)
        resolve(productsMock)
      }, 2000)
    })
  }

  useEffect(() => {
    // setLoader(true) --> acá LLAMARÍAMOS al loader para el efecto visual de "cargando"
    getProducts()
    .then((res) => {
      setProductos( category ? res.filter( product => product.categoria === category ) : res)
      console.log("Empanadas cargadas satisfactoriamente")
    })
    .catch((err) => {
      console.log("Error llamando a los productos.... Bajón!!")
      })
    .finally(() => { // se ejecuta SIEMPRE (independientemente de que se carguen los productos o fallen)
      console.log("FINALLY: Tarea finalizada")
    })
  }, [category]) // --> esto nos permite que se haga la llamada ÚNICAMENTE cuando se crea el componente (en el ciclo de MONTAJE)
  return (
    <>
      <div>
        <h1 className='text-4xl text-center font-extrabold my-2 italic bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-500'>NUESTRAS EMPANADAS</h1>
        <ItemList productos={productos}/>
      </div>
    </>
  )
}

export default ItemListContainer;