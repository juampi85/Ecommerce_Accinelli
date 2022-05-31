import React from 'react'
import { useEffect, useState } from 'react';
import Item from '../Item/Item'

const ItemList = () => {
  const [productos, setProductos] = useState([])

  const productosMock = [
    {id: 1, initial: 1, titulo: "Jamón y Queso", categoria: "Tradicionales", precio: 150, imagen: "./imagenes/jamon_queso-trad.jpg", stock: 10},
    {id: 2, initial: 1, titulo: "Caprese", categoria: "Especiales", precio: 200, imagen: "./imagenes/caprese-espec.jpg", stock: 25},
    {id: 3, initial: 1, titulo: "Jamón Crudo", categoria: "Súper Especiales", precio: 250, imagen: "./imagenes/jamon_crudo-super.jpg", stock: 15},
    {id: 4, initial: 1, titulo: "Jamon y Provolone", categoria: "Especiales", precio: 200, imagen: "./imagenes/jamon_provolone-espec.jpg", stock: 25},
    {id: 5, initial: 1, titulo: "Panceta y Huevo", categoria: "Súper Especiales", precio: 250, imagen: "./imagenes/panceta_huevo-super.jpg", stock: 15},
    {id: 6, initial: 1, titulo: "Árabe", categoria: "Árabes", precio: 150, imagen: "./imagenes/arabes-1.jpg", stock: 8}
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productosMock)
      }, 2000)
    })
  }

  useEffect(() => {
    // setLoader(true) --> acá LLAMARÍAMOS al loader para el efecto visual de "cargando"
    getProducts()
    .then((res) => {
      setProductos(res)
      console.log("Empanadas cargadas satisfactoriamente")
    })
    .catch((err) => {
      console.log("Error llamando a los productos.... Bajón!!")
    })
    .finally(() => { // se ejecuta SIEMPRE (independientemente de que se carguen los productos o fallen)
      console.log("FINALLY: Tarea finalizada")
    })
  }, []) // --> esto nos permite que se haga la llamada ÚNICAMENTE cuando se crea el componente (en el ciclo de MONTAJE)

  return (
    <>
      <div className='grid grid-cols-4 border-8 border-red-700 gap-1'>
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