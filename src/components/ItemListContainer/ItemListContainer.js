import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer =() => {
  const productosMock = [
    {id: 1, initial: 1, titulo: "Jamón y Queso", categoria: "Tradicionales", precio: 150, imagen: "http://www.maspizza.com.ar/images/Mesa_de_trabajo_20.jpg", stock: 10},
    {id: 2, initial: 1, titulo: "Caprese", categoria: "Especiales", precio: 200, imagen: "http://www.maspizza.com.ar/images/Mesa_de_trabajo_23.jpg", stock: 25},
    {id: 3, initial: 1, titulo: "Jamón Crudo", categoria: "Súper Especiales", precio: 250, imagen: "http://www.maspizza.com.ar/images/Mesa_de_trabajo_4.jpg", stock: 15},
    {id: 4, initial: 1, titulo: "Jamon y Provolone", categoria: "Especiales", precio: 200, imagen: "http://www.maspizza.com.ar/images/Mesa_de_trabajo_15.jpg", stock: 25},
    {id: 5, initial: 1, titulo: "Panceta y Huevo", categoria: "Súper Especiales", precio: 250, imagen: "http://www.maspizza.com.ar/images/Mesa_de_trabajo_11.jpg", stock: 15},
    {id: 6, initial: 1, titulo: "Árabe", categoria: "Árabes", precio: 150, imagen: "https://media-cdn.tripadvisor.com/media/photo-s/0a/9f/5f/62/empanadas-arabes.jpg", stock: 8}
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      resolve(productosMock)
    })
  }
  return (
    <>
      <div className='bg-slate-200 w-full flex flex-col items-center'>
        <ItemList productosMock={ productosMock}/>
      </div>
    </>
  )
}

export default ItemListContainer;