import {API} from '../api/middleware';

export const MEDIA = 'MEDIA';
export const LOAD_MEDIA = `${MEDIA}/LOAD_MEDIA`;

export function loadMedia(sku, callback) {
    return {
        type: LOAD_MEDIA,
        [API]: {
            method: 'get',
            url: `/V1/products/${sku}/media`
        },
        callback: callback
    }
}
