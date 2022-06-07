import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '../components/Loader.js/Loader';

const Faq = () => {
  const [loading, setLoading] = useState()

  const faq = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  useEffect(() => {
    setLoading(true) //--> acá LLAMARÍAMOS al loader para el efecto visual de "cargando"
    faq()
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
          // <div className='text-4xl italic mt-5 text-blue-600 font-bold text-center'>PREGUNTAS FRECUENTES</div>
          <div>
            <section class="text-gray-700">
              <div class="container px-5 py-2 mx-auto">
                <div class="text-center mb-10">
                  <h1 class="text-4xl italic my-5  text-blue-600 font-bold text-center">
                    PREGUNTAS FRECUENTES
                  </h1>
                  <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Esta es una serie de preguntas que generalmente nos fueron haciendo durante los últimos años.
                  </p>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div class="w-full lg:w-1/2 px-4 py-2">
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Cuándo comenzó la empresa en Posadas?
                      </summary>
                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                        Dónde está ubicado el negocio?
                      </summary>

                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Quiénes conforman la empresa?
                      </summary>

                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                      </span>
                    </details>
                  </div>
                  <div class="w-full lg:w-1/2 px-4 py-2">
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Las materias primas las compran en el día?
                      </summary>

                      <span class="px-4 py-2">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Qué partes del proceso de cocina las realizan ustedes?
                      </summary>

                      <span class="px-4 py-2">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Cuáles creen que son sus puntos fuertes/flojos?
                      </summary>

                      <span class="px-4 py-2">
                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                        minim velit nostrud pariatur culpa magna in aute.
                      </span>
                    </details>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
        }
    </>
  )
}

export default Faq;