import * as axios from 'axios';

export const ProductsAPI = {
    getProducts() {
        return axios.get('/api/product').then( Response => {
            return Response.data;
        });

    }
}
