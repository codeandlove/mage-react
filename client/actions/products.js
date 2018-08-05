import {API} from '../api/middleware';

export const PRODUCTS = 'PRODUCTS';
export const LOAD_PRODUCTS = `${PRODUCTS}/LOAD_PRODUCTS`;

export function loadProducts(query, callback) {
    return {
        type: LOAD_PRODUCTS,
        [API]: {
            method: 'get',
            params: query,
            url: '/V1/products'
        },
        callback: callback
    }
}
