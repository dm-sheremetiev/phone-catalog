import { Product } from '../types/Product';

export const findMatchByQuery = (products: Product[], query: string) => {
  return products.filter(product => (
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
    || product.id.toLowerCase().includes(query.toLocaleLowerCase())));
};
