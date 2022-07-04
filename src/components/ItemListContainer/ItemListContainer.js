import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import ItemList from '../ItemList/ItemList';
import Loader from '../Loader.js/Loader';

// Firestore
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemListContainer =() => {

  const [products, setProducts] = useState([])
  const {category} = useParams()
  const [loading, setLoading] = useState()


  useEffect(() => {
    setLoading(true)
    getProducts()
    
    .then((res) => {
      setProducts( category ? res.filter( product => product.categories === category ) : res)
    })
    .catch((err) => {})
    .finally(() => {
      setLoading(false)
    })
  }, [category])

  const getProducts = async () => {
    const productSnapshot = await getDocs(collection(db, "products"));
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
  };

  return (
    <>
      {loading ? (
        <Loader />
        ) : (
          <div className='bg-yellow-200'>
            <h1 className='text-transparent bg-clip-text w-4/5 text-5xl italic pt-4 font-extrabold mb-4 mx-auto text-center leading-normal bg-gradient-to-r from-indigo-500 via-orange-500 to-green-500'>
              Nuestras empanadas...!!
            </h1>
            <ItemList products={products}/>
          </div>
        )
      }
    </>
  )
}

export default ItemListContainer;