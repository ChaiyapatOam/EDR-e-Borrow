export interface Product {
  id: number;
  name: string;
  category: string;
  quantity: number;
  image: string;
  selectQuantity?: number;
}

export interface CartProduct {
  name: string;
  category: string;
  image: string;
  itemCout: number;
}
