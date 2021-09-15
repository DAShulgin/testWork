import  {ProductsAPI}  from '../API/API'

const GET_PRODUCTS_LIST = 'productReducer/SET-PRODUCTS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';


let initialState = {
    products: [],
    isFetching: false,
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIST:
            return { ...state, products: action.products }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
            default:
                return state;
    }
}

export const setProducts = (products) => ({ type: GET_PRODUCTS_LIST, products });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const requestProducts = () => async (dispatch) => {
    debugger;
    dispatch(toggleIsFetching(true));
    let responce = await ProductsAPI.getProducts();
    dispatch(toggleIsFetching(false));
    dispatch(setProducts(responce));
};

export default productReducer;