import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import CartContext from "../context/CartContext";
import {addDoc, collection} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
  const { cartListItems, totalPrice, clearCart, reduceCart } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name:"",
    phone:"",
    email:""
  });
  const [order, setOrder] = useState({
    buyer:{},
    items: cartListItems.map( item => {
      return {
        id: item.id,
        title: item.title,
        price: item.price
      }
    }),
    total: totalPrice
  });

  const [success, setSuccess] = userState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrder({...order, buyer: formValue})
    saveData({...order, buyer: formValue})
  }

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name] : e.target.value})  
  }

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "orders");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    console.log("orden generada", orderDoc.id);
    setSuccess(orderDoc.id);
  }




  return (
    <div>
      {console.log("order", order)}
      <h2 className="text-transparent bg-clip-text w-4/5 text-5xl italic pt-2 pb-4 font-extrabold my-0 mx-auto text-center leading-normal bg-gradient-to-r from-indigo-500 via-orange-500 to-green-500">
        Confirmar compra...
      </h2>
      <div>
        <div className="flex justify-between">
          <h2 className="ml-3 font-bold">Producto</h2>
          <h2 className="font-bold">Descripcion</h2>
          <h2 className= "-mr-16 font-bold">Precio Unitario</h2>
          <h2 className="-mr-4 font-bold">Cantidad</h2>
          <h2 className="mr-24 font-bold">Quitar</h2>
        </div>
        {cartListItems.length === 0 && ( // el "&&" actúa como condicional donde NO EXISTE un ELSE
              <div className="mt-8 border-2 border-cyan-600 w-2/5 mx-auto rounded-lg text-center p-5 bg-green-300">
                <p className="text-lg font-bold">
                  {" "}
                  Aún no hay productos en el carrito...
                </p>
                <Link
                  className="text-md underline font-semibold text-red-800"
                  to="../products"
                >
                  Empezar a comprar
                </Link>
              </div>
          )}
        {cartListItems.map((item) => {
          const { id, title, image, price, quantity } = item;
          return (
            <div className="flex my-2" key={id}>
              <div className="w-1/12 ml-1">
                <img src={`./${image}`} alt="product in cart" />
              </div>
              <div className="w-2/6 mx-auto text-center my-auto">
                <p>{title}</p>
              </div>
              <div className="w-1/6 mx-auto text-center my-auto">
                <p>$ {price}</p>
              </div>
              <div className="w-1/6 mx-auto text-center my-auto">
                <p>{quantity}</p>
              </div>
              <div className="w-1/6 mx-auto text-center my-auto">
                <button className="btn-delete" onClick={() => {reduceCart(id)}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex border-2 border-yellow-600 justify-around">
          <button className="border-2 border-black rounded-md my-2 w-1/5 p-0 justify-end font-bold bg-red-500 text-white text-xl" onClick={clearCart}>
              Vaciar carrito
          </button>
          <button className="border-2 border-black rounded-md my-2 w-1/5 p-0 justify-end font-bold bg-slate-500 text-white text-xl">
            <Link to="../products">
              Continuar comprando
            </Link>
          </button>
          <div className="my-2">
            <div className="">
              <p className="font-semibold text-center">Total</p>
              <p className="text-center">$ {totalPrice()}</p>
            </div>
            {/* <button className="rounded-2xl p-2 bg-yellow-400 text-blue-600 font-extrabold" onClick={() => {console.log("Holandaaaaaa")}}>
              Completar Compra
            </button> */}

            <button
        className="bg-pink-500 text-white rounded-2xl active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Completar Compra
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* ACÁ va el FORM*/}
                  {success ? (
                    <div>
                      La orden se generó con éxito!!
                      Número de orden: {success}
                    </div>
                  ) : (
                  <form onSubmit={handleSubmit}>
                    <input required className="border-2 border-gray-500 pl-2 mr-2" placeholder="Juanito Belmondo" label="Nombre y Apellido" value={formValue.name} name="name" onChange={handleChange}/>
                    <input required className="border-2 border-gray-500 pl-2 mr-2" placeholder="376-4999777" label="Teléfono" value={formValue.phone} name="phone" onChange={handleChange}/>
                    <input required className="border-2 border-gray-500 pl-2 mr-2" placeholder="juanito@belmondo.com" label="Email" value={formValue.email} name="email" onChange={handleChange}/>
                    <button className="text-lg font-bold italic hover:text-2xl" type="submit"> Enviar </button>
                  </form>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar Compra
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    CONFIRMAR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;