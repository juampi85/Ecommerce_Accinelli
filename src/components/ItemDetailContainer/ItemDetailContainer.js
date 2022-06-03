import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import productsMock from "../../utils/productsMock";

  const ItemDetailContainer = () => {
    const {id} = useParams()
    const [detalle, setDetalle] = useState({}) // poniendo las llaves le decimos que "detalle" es un OBJETO

    useEffect(() => {
      const productFilter = productsMock.find((product) => {
        return product.id === parseInt(id);
      });
      setDetalle(productFilter);
    }, [id]);

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