import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItemToCart: (product: Product, size: CartItem["size"]) => void;
  updateItemQuantity: (itemId: string, amount: -1 | 1) => void;
  //   removeItemFromCart: () => void;
  //   clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartType>({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  //   removeItemFromCart: () => {},
  //   clearCart: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItemToCart = (product: Product, size: CartItem["size"]) => {
    console.log("Adding item to cart", product, size);
    //if already in cart, increase quantity
    const existingItem = items.find(
      (item) => item.product_id === product.id && item.size === size
    );
    if (existingItem) {
      updateItemQuantity(existingItem.id, 1);
      return;
    }
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
  };

  const updateItemQuantity = (id: string, amount: -1 | 1) => {
    const updatedItem = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + amount };
      }
      return item;
    });
    setItems(updatedItem.filter((item) => item.quantity > 0));
  };
  const removeItemFromCart = () => {};
  const clearCart = () => {};
  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        updateItemQuantity,
        // removeItem: removeItemFromCart,
        // clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
