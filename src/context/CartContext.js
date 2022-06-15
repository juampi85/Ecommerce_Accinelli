import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const addProductToCart = (product) => {
    let isInCart = cartListItems.find((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      console.log("se agrego el producto:", product);
      setTotalPrice(totalPrice + product.price * product.quantity)
      return setCartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  const reduceCart = (product) => {
    setCartListItems({
      ...cartListItems,
      cartListItems: cartListItems.filter((items) => items.id !== product.id),
    });
  };

  const clearCart = () => {
    cartListItems.length = 0;
  };

  const data = {
    cartListItems,
    addProductToCart,
    totalPrice,
    clearCart,
    reduceCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };