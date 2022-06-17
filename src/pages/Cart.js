import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../context/CartContext";

const Cart = () => {
  const { cartListItems, totalPrice, clearCart, reduceCart } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-center my-4 font-bold text-5xl">Confirmar compra... </h2>
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
              <div className="w-1/12">
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
            <button className="rounded-2xl font-semibold p-2 bg-yellow-400 text-blue-600 font-extrabold">Completar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;