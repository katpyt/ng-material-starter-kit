export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: ProductsInCart[];
}

export interface ProductsInCart{
  productId: number;
  quantity: number;
}
