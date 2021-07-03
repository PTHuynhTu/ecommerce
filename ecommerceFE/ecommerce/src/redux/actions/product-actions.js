import {
  GET_PRODUCT_SALES,
  GET_PRODUCT_FILTER_ITEM,
  GET_ALL_PRODUCT_PAGING,
  LOADING_PRODUCT,
} from "../action-types/product-action-types";

export const loadingProduct = () => ({
  type: LOADING_PRODUCT,
});

export const getListProductSale = (productList) => ({
  type: GET_PRODUCT_SALES,
  payload: productList,
});

export const getProductFilterItem = (productFiterItem) => ({
  type: GET_PRODUCT_FILTER_ITEM,
  payload: productFiterItem,
});

export const getPageProduct = (productList) => ({
  type: GET_ALL_PRODUCT_PAGING,
  payload: productList,
});
