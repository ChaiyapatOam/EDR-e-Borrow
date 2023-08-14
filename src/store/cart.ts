import type { Product } from "@/types/ProductType";
import { derived, writable } from "svelte/store";

export const Cart = writable<Product[]>([]);

export const cartCount = derived(Cart, ($cart: Product[]) => {
  return $cart.length;
});

export const clearCart = () => Cart.set([]);
