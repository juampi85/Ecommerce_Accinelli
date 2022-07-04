import { CartWidgetStyle } from "./CartWidget.elements";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";

  const CartWidget = () => {
  const {cartListItems, totalItemsWidget} = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open=Boolean(anchorEl);
  const handleClick=(e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <CartWidgetStyle>
      <Link to="/cart" className="flex flex-col">
        {totalItemsWidget()} 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 pb-1 my-0 mx-auto" onClick={handleClick} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
              <Link className="text-sm underline" to="./">
                Empezar a comprar
              </Link>
            </>
          )}
        </div>
      </div>
      </Link>
    </CartWidgetStyle>
  )
}

export default CartWidget;