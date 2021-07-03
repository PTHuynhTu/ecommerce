import {
  LOADING_PRODUCT,
  GET_PRODUCT_SALES,
  GET_PRODUCT_FILTER_ITEM,
  GET_ALL_PRODUCT_PAGING,
} from "../action-types/product-action-types";

const initialState = {
  products: [],
  product: {},
  productFilterItem: {},
  isLoadingProduct: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PRODUCT:
      return { ...state, isLoadingProduct: true };

    case GET_PRODUCT_SALES:
      return { ...state, products: action.payload, isLoadingProduct: false };

    case GET_PRODUCT_FILTER_ITEM:
      return { ...state, productFilterItem: action.payload };

    case GET_ALL_PRODUCT_PAGING:
      return { ...state, products: action.payload, isLoadingProduct: false };

    default:
      return state;
  }
};

export default productReducer;
