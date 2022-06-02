import React from 'react'
import { useEffect, useState } from 'react';
import Item from '../Item/Item'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemList = () => {
  const [productos, setProductos] = useState([])

  const productosMock = [
    {id: 1, initial: 1, titulo: "Jamón y Queso", categoria: "Tradicionales", precio: 150, imagen: "./imagenes/tradicionales/jamon_queso-trad.jpg", stock: 10},
    {id: 2, initial: 1, titulo: "Carne y Queso", categoria: "Tradicionales", precio: 150, imagen: "./imagenes/tradicionales/carne_queso-trad.jpg", stock: 25},
    {id: 3, initial: 1, titulo: "Humita", categoria: "Tradicionales", precio: 150, imagen: "./imagenes/tradicionales/humita-trad.jpg", stock: 15},
    {id: 4, initial: 1, titulo: "Pollo", categoria: "Tradicionales", precio: 150, imagen: "./imagenes/tradicionales/pollo-trad.jpg", stock: 25},
    {id: 5, initial: 1, titulo: "Verdura", categoria: "Tradicionales", precio: 150, imagen: "./imagenes/tradicionales/verdura-trad.jpg", stock: 15},
    {id: 6, initial: 1, titulo: "Calabresa y Cebolla", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/calabresa_cebolla-espec.jpg", stock: 15},
    {id: 7, initial: 1, titulo: "Caprese", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/caprese-espec.jpg", stock: 15},
    {id: 8, initial: 1, titulo: "Carne Dulce", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/carne_dulce-espec.jpg", stock: 15},
    {id: 9, initial: 1, titulo: "Cuatro Quesos", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/cuatro_quesos-espec.jpg", stock: 15},
    {id: 10, initial: 1, titulo: "Jamón y Ananá", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/cuatro_quesos-espec.jpg", stock: 15},
    {id: 11, initial: 1, titulo: "Jamón y Provolone", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/jamon_provolone-espec.jpg", stock: 15},
    {id: 12, initial: 1, titulo: "Jamón, Queso y Morrón", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/jamon_queso_morron-espec.jpg", stock: 15},
    {id: 13, initial: 1, titulo: "Napolitana", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/napolitana-espec.jpg", stock: 15},
    {id: 14, initial: 1, titulo: "Queso y Cebolla", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/queso_cebolla-espec.jpg", stock: 15},
    {id: 15, initial: 1, titulo: "Vienesa", categoria: "Especiales", precio: 200, imagen: "./imagenes/especiales/vienesa-espec.jpg", stock: 15},
    {id: 16, initial: 1, titulo: "Atún", categoria: "Súper Especiales", precio: 250, imagen: "./imagenes/super-especiales/atun-super.jpg", stock: 15},
    {id: 17, initial: 1, titulo: "Cortada a cuchillo", categoria: "Súper Especiales", precio: 250, imagen: "./imagenes/super-especiales/carne_cuchillo-super.jpg", stock: 15},
    {id: 18, initial: 1, titulo: "Jamón Crudo", categoria: "Súper Especiales", precio: 250, imagen: "./imagenes/super-especiales/jamon_crudo-super.jpg", stock: 15},
    {id: 19, initial: 1, titulo: "Panceta y Huevo", categoria: "Súper Especiales", precio: 250, imagen: "./imagenes/super-especiales/panceta_huevo-super.jpg", stock: 15},
    {id: 20, initial: 1, titulo: "Árabe", categoria: "Árabes", precio: 150, imagen: "./imagenes/arabes/arabes.jpg", stock: 8}
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
              <Item titulo={titulo} precio={precio} imagen={imagen} categoria={categoria} stock={stock} id={id}/>
              <ItemDetailContainer productosMock/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ItemList;