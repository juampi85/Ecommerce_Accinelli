import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";


const ItemDetail = ({detail}) => {
  const {title, categories, price, image, stock, description, id} = detail;
  const {addProductToCart} = useContext(CartContext);
  const [showButton, setShowButton] = useState(false);
  const onAdd = (count) => {
    addProductToCart({
      image,
      categories,
      price,
      title,
      stock,
      id,
      quantity: count,
    });
  }
  return (
    <div className="bg-yellow-200 grid grid-cols-4 h-96 gap-2 justify-items-center border-4 border-red-700 rounded-3xl">
      <img src={image} alt={title} className="mx-0 my-auto pb-2 col-span-3 rounded-3xl h-[350px] w-[600px]" />
      <div className="mx-0 my-auto mr-1">
        <h1 className="text-3xl text-emerald-900 font-bold underline decoration-wavy decoration-2 hover:decoration-dashed mb-2">Empanada de {title}</h1>
        <p className="italic text-left text-lg">• Pertenece al grupo de las <b>{categories}</b>. {description}</p>
        <p className="text-left ">• <b>Precio</b>: <i className="italic">$ {price}</i></p>
        <p className="text-left">• <b>Stock:</b> Aprovechá que tenemos {stock} empanadas de {title} a disposición right now...!!!</p>
        {!showButton ?
          <ItemCount 
          onAdd={onAdd}
          stock={stock} 
          setShowButton={setShowButton}
        />
        : 
        <button className="border-2 border-black rounded-xl w-full mt-10 font-semibold text-white bg-slate-600 hover:text-lg">
          <Link to="/cart">Confirmar compra</Link>
        </button>}
      </div>
    </div>
  )
}

export default ItemDetail;