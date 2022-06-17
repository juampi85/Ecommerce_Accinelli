import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import productsMock from "../../utils/productsMock";
import Loader from "../Loader.js/Loader";

  const ItemDetailContainer = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState({}) // poniendo las llaves le decimos que "detalle" es un OBJETO
    const [loading, setLoading] = useState()
    
    const showDetails = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productsMock)
        }, 2000)
      })
    }

    useEffect(() => {
      setLoading(true)
      showDetails()
      .then((res) => {
        setDetail(res.find((product) => {return product.id === parseInt(id)}))
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false)
      })
    }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
        ) : (
          <div className="mt-5 w-4/5 my-0 mx-auto text-center">
            <h2 className="text-4xl italic mb-5 text-blue-600 font-bold">Detalle del Producto</h2>
            <ItemDetail detail={detail}/>
          </div>
        )
      }
    </>
  )
}

export default ItemDetailContainer;