import { create } from "zustand";
import { persist } from "zustand/middleware";

interface storeState {
  cart: number;
  cartArray: any[];
  addToCart: (item: {}) => void;
  clearCart: () => void;
  incrementCart: () => void;
}

const Store = create<storeState>()(
  persist(
    (set) => ({
      cart: 0,
      cartArray: [],
      addToCart: (item: any) => set((state) => ({ cartArray: [...state.cartArray, item] })),
      clearCart: () => set({ cart: 0, cartArray: [] }),
      incrementCart: () => set((state) => ({ cart: state.cart + 1 })),
    }),
    { name: "store-state" } 
  )
);

export default Store;
