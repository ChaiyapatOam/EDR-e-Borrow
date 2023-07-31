import { writable } from "svelte/store";

interface Product {
  uid: string;
  productName: string;
  itemCount: number;
}

export const Cart = writable<Product[]>([]);
