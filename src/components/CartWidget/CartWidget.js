import { TiShoppingCart } from "react-icons/ti";
import { CartWidgetStyle } from "./CartWidget.elements";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <CartWidgetStyle>
      <Link to="/cart">
        <TiShoppingCart size={"4em"} />
      </Link>
    </CartWidgetStyle>
  )
}

export default CartWidget;