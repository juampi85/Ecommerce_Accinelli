import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);

  const addProductToCart = (product) => {

    if (!isInCart(product.id)) {
      return setCartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  const reduceCart = (id) => {
    return setCartListItems(cartListItems.filter((items) => items.id !== id));
  };

  const clearCart = () => {
    setCartListItems([]);
  };

  const totalPrice = () => {
    return cartListItems.reduce((acum, product) => acum + product.price * product.quantity, 0)
  }

  const isInCart = (id) => {
    cartListItems.find((cartItem) => cartItem.id === id);
  }

  const totalItemsWidget = () => {
    return cartListItems.reduce((acum, product) => acum += product.quantity, 0)
  }


  const data = {
    cartListItems,
    totalPrice,
    addProductToCart,
    clearCart,
    reduceCart,
    totalItemsWidget
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };