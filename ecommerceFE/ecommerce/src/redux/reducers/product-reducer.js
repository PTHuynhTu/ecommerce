import {
  GET_PRODUCT_SALES,
  GET_PRODUCT_FILTER_ITEM,
} from "../action-types/product-action-types";

const initialState = {
  products: [],
  product: {},
  productFilterItem: {},
  isLoadingProduct: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SALES:
      return { ...state, products: action.payload };

    case GET_PRODUCT_FILTER_ITEM:
      return { ...state, productFilterItem: action.payload };

    default:
      return state;
  }
};

export default productReducer;
