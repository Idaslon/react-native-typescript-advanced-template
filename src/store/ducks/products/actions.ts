import { ProductsTypes, Product } from './types';

export const addToCartRequest = (product: Product) => ({
  type: ProductsTypes.ADD_TO_CART_REQUEST,
  payload: product,
});
