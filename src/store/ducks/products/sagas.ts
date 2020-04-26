import { all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from './types';
import { addToCartRequest } from './actions';

function* addToCart({ payload }: ReturnType<typeof addToCartRequest>) {}

export default all([takeLatest(ProductsTypes.ADD_TO_CART_REQUEST, addToCart)]);
