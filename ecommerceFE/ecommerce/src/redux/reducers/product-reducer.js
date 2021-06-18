import { GET_PRODUCT_SALES } from "../action-types/product-action-types";

const initialState = {
  products: [],
  product: {},
  isLoadingProduct: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SALES:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
