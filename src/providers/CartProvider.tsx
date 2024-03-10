import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {}
});
const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider value={{ items: items, addItem: () => {} }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

export default CartProvider;
