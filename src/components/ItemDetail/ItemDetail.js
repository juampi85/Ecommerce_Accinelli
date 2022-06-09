import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

// ACÁ SE MUESTRA EL DETALLE DEL PRODUCTO
const ItemDetail = ({detail}) => {
  const {title, categories, price, image, stock, description} = detail;
   
  // ver si se puede hacer ESTO de crear OTRA función
  const onAdd = (count) => {
    console.log(`Se agregaron ${count} empanadas de ${title}`);
  }
  const [showButton, setShowButton] = useState(false)
  return (
    <div className="grid grid-cols-4 h-96 gap-2 text-center border-4 border-red-700 rounded-3xl">
      <img src={image} alt={title} className="mx-0 my-auto h-96 pb-2 w-full col-span-3 rounded-3xl shadow-md" />
      <div className="mx-0 my-auto mr-1">
        <button onClick={sendItemToCart}>AgReGaR</button>
        <h1 className="text-3xl text-emerald-900 font-bold underline decoration-wavy decoration-2 hover:decoration-dashed mb-2">Empanada de {title}</h1>
        <p className="italic text-left text-lg">• Pertenece al grupo de las <b>{categories}</b>. {description}</p>
        <p className="text-left ">• <b>Precio</b>: <i className="italic">$ {price}</i></p>
        <p className="text-left">• <b>Stock:</b> Aprovechá que tenemos {stock} empanadas de {title} a disposición right now...!!!</p>
        {!showButton ?
          <ItemCount 
          onAdd={onAdd} // ver si se puede hacer ESTO de crear OTRA función
          stock={stock} 
          setShowButton={setShowButton}
        />
        : 
        <button className="border-2 border-black rounded-xl w-full mt-10 font-semibold text-white bg-slate-600 hover:text-lg">
          <Link to="/cart">Confirmar compra</Link>
        </button>}
      </div>|
    </div>
  )
}

export default ItemDetail;