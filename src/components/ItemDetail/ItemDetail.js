// ACÁ SE MUESTRA EL DETALLE DEL PRODUCTO

const ItemDetail = ({detalle}) => {
  // console.log("Producto recibido desde ItemDetailContainer: ", detalle)
  const {titulo, categoria, precio, imagen, stock, descripcion} = detalle;
  return (
    <div className="grid grid-cols-4 h-96 gap-2 text-center border-4 border-red-700 rounded-3xl">
      <img src={imagen} alt={titulo} className="mx-0 my-auto h-96 pb-2 w-full col-span-3 rounded-3xl shadow-md" />
      <div className="mx-0 my-auto">
        <h1 className="text-3xl text-emerald-900 font-bold underline decoration-wavy decoration-2 hover:decoration-dashed mb-12">Empanada de {titulo}</h1>
        {/* <p className="italic text-left mt-4 text-lg">• Un clásico de la casa. La más destacada entre las {categoria}. {descripcion}</p> */}
        <p className="text-left mb-12">• <b>Precio</b> (solo x el HotSale): <i className="font-bold">$ {precio}</i></p>
        <p className="text-left">• <b>Stock:</b> Aprovechá que tenemos {stock} empanadas de {titulo} a disposición right now...!!!</p>
      </div>
    </div>
  )
}

export default ItemDetail;