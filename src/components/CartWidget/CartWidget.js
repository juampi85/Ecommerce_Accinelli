import { TiShoppingCart } from "react-icons/ti";
import { CartWidgetStyle } from "./CartWidget.elements";

const CartWidget = () => {
  return (
    <CartWidgetStyle>
      <TiShoppingCart size={"4em"} />
    </CartWidgetStyle>
  )
}

export default CartWidget;