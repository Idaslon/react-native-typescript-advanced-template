import { Reducer } from 'redux';

import { ProductsState, ProductsTypes, ProductsActionsTypes } from './types';

const INITIAL_STATE: ProductsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<ProductsState, ProductsActionsTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ProductsTypes.ADD_TO_CART_SUCESS:
      return state;
    case ProductsTypes.UPDATE_AMOUNT_SUCCESS:
      return state;
    case ProductsTypes.REMOVE_FROM_CART:
      return state;
    default:
      return state;
  }
};

export default reducer;
