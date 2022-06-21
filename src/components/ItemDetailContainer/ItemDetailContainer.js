import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
// import productsMock from "../../utils/productsMock";
import Loader from "../Loader.js/Loader";

//Firebase
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

  const ItemDetailContainer = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState({}) // poniendo las llaves le decimos que "detalle" es un OBJETO
    const [loading, setLoading] = useState()
    
    // const showDetails = () => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(productsMock)
    //     }, 2000)
    //   })
    // }

    useEffect(() => {
      setLoading(true)
      // showDetails()
      getProduct() 
      .then((res) => {
        // setDetail(res.find((product) => {return product.id === parseInt(id)}))
        setDetail(res)
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false)
      })
    }, [id]);

    const getProduct = async() => {
      const docRef = doc(db, "products", id);
      const docSnapshop = await getDoc(docRef);
      let product = docSnapshop.data();
      product.id = docSnapshop.id;
      return product;
    };

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