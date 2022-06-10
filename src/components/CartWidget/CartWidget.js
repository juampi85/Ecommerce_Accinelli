import { CartWidgetStyle } from "./CartWidget.elements";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";

const CartWidget = () => {
  const {cartListItems} = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(cartListItems);
  const {clearCart} = useContext(CartContext);
  const open=Boolean(anchorEl);
  const handleClick=(e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <CartWidgetStyle>
      <Link to="/cart" className="flex flex-col p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 pb-1 my-0 mx-auto" onClick={handleClick} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <div
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <div>
          {cartListItems.length === 0 && (
            <>
              <p className="text-sm"> No hay productos en el carrito</p>
              <Link className="text-sm underline" to="./products">
                Empezar a comprar
              </Link>
            </>
          )}

          {cartListItems.map((item) => {
            return (
              <>
                <div className="grid grid-cols-8 w-44 mb-1 items-center" key={item.id}>
                  <div className="col-span-2">
                    <img className="h-12 w-12 my-0 mx-auto"
                      src={item.image}
                      alt="producto en carrito"
                    />
                  </div>
                  <div className="cart-info col-span-4 ">
                    <p className="text-xs ">{item.title}</p>
                    <span className="text-xs">${item.price}</span>
                  </div>
                  <div className="grid grid-cols-1 col-span-1 ">
                    <span className="text-xs">{item.quantity}u</span>
                  </div>
                  <div className="col-span-1 mt-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      </Link>
        <button onClick={() => clearCart()} className="w-full text-sm border-2 border-black rounded-lg bg-red-500 text-white font-semibold">Vaciar carrito</button>
    </CartWidgetStyle>
  )
}

export default CartWidget;