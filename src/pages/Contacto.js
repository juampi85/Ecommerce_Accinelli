import { useEffect, useState } from 'react';

import Loader from '../components/Loader.js/Loader';
import ContactForm from '../components/ContactForm/ContactForm';


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
    setLoading(true)
    contact()
    .then((res) => {})    
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
        ) : (
          <ContactForm />
        )
      }
    </>
  )
}

export default Contacto;