import { useEffect, useState } from 'react';

import Loader from '../components/Loader.js/Loader';

const Home = () => {
  const [loading, setLoading] = useState()

  const home = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  useEffect(() => {
    setLoading(true) //--> acá LLAMARÍAMOS al loader para el efecto visual de "cargando"
    home()
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
          <div className='h-screen'>
            <h1 className='text-transparent bg-clip-text w-4/5 text-5xl italic pt-4 font-extrabold my-0 mx-auto text-center leading-normal bg-gradient-to-r from-indigo-500 via-orange-500 to-green-500'> Sean bienvenidos a la más tradicional (y moderna) casa de empanadas de todo el litoral...!!</h1>
          </div>
        )
      }
    </>
  )
}

export default Home;