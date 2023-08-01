import { derived, writable } from "svelte/store";

interface Product {
  uid: string;
  productName: string;
  image: string;
  itemCount: number;
}

export const Cart = writable<Product[]>([]);

export const cartCount = derived(Cart, ($cart: Product[]) => {
  return $cart.length;
});
