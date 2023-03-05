import { ProductModel } from "../models/product.model";

export interface ProductsWithOtherFromCategoryQueryModel {
  readonly productName: string;
  readonly productPrice: number;
  readonly otherProducts: ProductModel[];
}
