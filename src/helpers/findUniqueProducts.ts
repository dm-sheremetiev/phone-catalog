import { Product } from '../types/Product';

export const findUniqueProducts = (products: Product[]) => {
  return products.filter(
    (product: Product, index: number, self: Product[]) => (
      index === self.findIndex((targetProduct) => (
        targetProduct.name === product.name
      ))
    ),
  );
};
