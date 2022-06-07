import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '../components/Loader.js/Loader';

const Cart = () => {
  const [loading, setLoading] = useState()
  
  const cart = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  useEffect(() => {
    setLoading(true) //--> acá LLAMARÍAMOS al loader para el efecto visual de "cargando"
    cart()
    .then((res) => {})    
    .finally(() => { // se ejecuta SIEMPRE (independientemente de que se carguen los productos o fallen)
      setLoading(false)
    })
  }, [])
  return (
    <>
      {loading ? (
        <Loader />
        ) : (
          <div className='text-4xl italic mt-5 text-blue-600 font-bold text-center'>WELCOME TO THE CARRITO....</div>
        )
      }
    </>
  )
}

export default Cart;