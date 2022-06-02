// ACÁ VA LA PROMESA
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

  const ItemDetailContainer = () => {
  console.log("Parámetros: ", useParams())
  const productoDetalle = {
    id: 1,
    initial: 1,
    titulo: "Jamón y Queso",
    categoria: "Tradicionales",
    precio: 150,
    imagen: "./imagenes/tradicionales/jamon_queso-trad.jpg",
    stock: 10, 
    descripcion: "Jamón y queso muzzarella de primera....casi que demasiado para Sudamérica"}

    const [detalle, setDetalle] = useState({}) // poniendo las llaves le decimos que "detalle" es un OBJETO
    const getItem = () => {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productoDetalle)
        }, 2000)
      })
    }

    useEffect(() => {
      getItem()
      .then((response) => {
        // console.log("Respuesta: ", response)
        setDetalle(response)
      })
    },[])

  return (
    <>
      <div className="mt-5 w-4/5 my-0 mx-auto text-center">
        <h2 className="text-4xl italic mb-5 text-blue-600 font-bold">Detalle del Producto</h2>
        <ItemDetail detalle={detalle}/>
      </div>
    </>
  )
}

export default ItemDetailContainer;