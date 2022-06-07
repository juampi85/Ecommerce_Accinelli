// ACÁ SE MUESTRA EL DETALLE DEL PRODUCTO
const ItemDetail = ({detail}) => {
  const {title, categories, price, image, stock, description} = detail;
  return (
    <div className="grid grid-cols-4 h-96 gap-2 text-center border-4 border-red-700 rounded-3xl">
      <img src={image} alt={title} className="mx-0 my-auto h-96 pb-2 w-full col-span-3 rounded-3xl shadow-md" />
      <div className="mx-0 my-auto">
        <h1 className="text-3xl text-emerald-900 font-bold underline decoration-wavy decoration-2 hover:decoration-dashed mb-4">Empanada de {title}</h1>
        <p className="italic text-left mb-2 text-lg">• Pertenece al grupo de las <b>{categories}</b>. {description}</p>
        <p className="text-left mb-12">• <b>Precio</b> (solo x el HotSale): <i className="font-bold">$ {price}</i></p>
        <p className="text-left">• <b>Stock:</b> Aprovechá que tenemos {stock} empanadas de {title} a disposición right now...!!!</p>
      </div>
    </div>
  )
}

export default ItemDetail;