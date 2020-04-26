export interface Product {
  amount: number;
  subtotal: number;
  subtotalFormatted: string;
}

export interface ProductsState {
  readonly data: Product[];
  readonly loading: boolean;
  readonly error: boolean;
}

export enum ProductsTypes {
  ADD_TO_CART_REQUEST = '@products/ADD_TO_CART_REQUEST',
  ADD_TO_CART_SUCESS = '@products/ADD_TO_CART_SUCESS',
  UPDATE_AMOUNT_REQUEST = '@products/UPDATE_AMOUNT_REQUEST',
  UPDATE_AMOUNT_SUCCESS = '@products/UPDATE_AMOUNT_SUCCESS',
  REMOVE_FROM_CART = '@products/REMOVE_FROM_CART',
}

interface AddToCartRequestAction {
  type: typeof ProductsTypes.ADD_TO_CART_REQUEST;
  payload: Product;
}

interface AddToCartSucessAction {
  type: typeof ProductsTypes.ADD_TO_CART_SUCESS;
  payload: Product;
}

export type ProductsActionsTypes =
  | AddToCartRequestAction
  | AddToCartSucessAction;
