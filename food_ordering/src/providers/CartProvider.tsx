import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Tables } from "../types";
import { randomUUID } from "expo-crypto";
import { useInsertOrder } from "@/api/orders";
import { useRouter } from "expo-router";
import { useInsertOrderItems } from "@/api/order-items";
import { useAuth } from "./AuthProvider";

type Product = Tables<"products">;

type CartType = {
  items: CartItem[];
  addItemToCart: (product: Product, size: CartItem["size"]) => void;
  updateItemQuantity: (itemId: string, amount: -1 | 1) => void;
  //   removeItemFromCart: () => void;
  //   clearCart: () => void;
  total: number;
  checkout: () => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  //   removeItemFromCart: () => {},
  total: 0,
  checkout: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const router = useRouter();
  const { mutate: insertOrder } = useInsertOrder();
  const { mutate: insertOrderItems } = useInsertOrderItems();
  const { session } = useAuth();
  const userId = session?.user.id;

  const addItemToCart = (product: Product, size: CartItem["size"]) => {
    // console.log("Adding item to cart", product, size);
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
  const clearCart = () => {
    setItems([]);
  };
  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const checkout = () => {
    console.warn("Checking out");
    insertOrder(
      { total, user_id: userId as string },
      {
        onSuccess: saveOrderItems,
      }
    );
  };

  const saveOrderItems = (order: Tables<"orders">) => {
    const orderItems = items.map((cartItem) => ({
      order_id: order.id,
      product_id: cartItem.product_id,
      quantity: cartItem.quantity,
      size: cartItem.size,
    }));

    insertOrderItems(orderItems, {
      onSuccess() {
        clearCart();
        router.push(`/(user)/orders/${order.id}`);
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        updateItemQuantity,
        // removeItem: removeItemFromCart,
        // clearCart,
        total,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
