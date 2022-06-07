import React from 'react'
import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Loader from '../components/Loader.js/Loader';


const Contacto = () => {
  const [loading, setLoading] = useState()
  
  const contact = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  useEffect(() => {
    setLoading(true) //--> acá LLAMARÍAMOS al loader para el efecto visual de "cargando"
    contact()
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
          <ContactForm />
          // <div className='text-4xl italic mt-5 text-blue-600 font-bold text-center'>PÁGINA DE CONTACTO</div>
        )
      }
    </>
  )
}

export default Contacto;