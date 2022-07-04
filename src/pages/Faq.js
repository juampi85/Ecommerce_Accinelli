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
    setLoading(true)
    faq()
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
                        La empresa comenzó en Octubre del 2017 (más precisamente el 14 de octubre). Fué con mucho esfuerzo que la iniciamos con mi socia.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                        Dónde está ubicado el negocio?
                      </summary>

                      <span>
                        El local está ubicado en la calle Padre Serrano al 2400 (en el Barrio Papini), a solo 7' del centro de Posadas.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Quiénes conforman la empresa?
                      </summary>

                      <span>
                        La empresa la llevamos adelante en forma bien familiar; los responsables de la misma somos mi mujer, mis 2 hijas y yo.
                      </span>
                    </details>
                  </div>
                  <div class="w-full lg:w-1/2 px-4 py-2">
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Las materias primas las compran en el día?
                      </summary>

                      <span class="px-4 py-2">
                        Todo lo clasificable como "frescos" son, en forma innegociable, comprados en el día (es por ello que nos tomamos como descanso el día domingo, ya que nuestros proveedores no abren dicho día).
                        Ahora, lo que hace a las verduras, por ejemplo, dependiendo de la estación, las compramos (como máximo) el día anterior, manteniéndolas en contenedores especiales para conservar su frescura.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Qué partes del proceso de cocina las realizan ustedes?
                      </summary>

                      <span class="px-4 py-2">
                        Absolutamente todos los procesos los realizamos nosotros. Desde las masas de las empanadas, la cocción de las verduras, el cortado de las materias primas, el armado de las empanadas y su posterior cocción a horno de barro.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Cuáles creen que son sus puntos fuertes/flojos?
                      </summary>

                      <span class="px-4 py-2">
                        Los puntos FUERTES, sin dudas, son la materia prima que utilizamos. Junto a la obsesión por la excelencia en el trabajo con el que venimos, cada día, a trabajar.
                        Y, como algo a mejorar, si se quiere, podríamos decir que tenemos una capacidad limitada de producción (la cual, por suerte, ya la alcanzamos hace tiempo y nos mantenemos en el mismo volumen de ventas) ya que somos solo 4 personas las que gestionamos TODO el funcionamiento del local (apertura/cierre y limpieza del mismo, la producción/cocina de las empanadas, atención de teléfono/whatsapp/correos con los pedidos, etc), excepto el delivery el cual está tercerizado para poder nosotros concentrarnos en "hacer la magia" aquí adentro.
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