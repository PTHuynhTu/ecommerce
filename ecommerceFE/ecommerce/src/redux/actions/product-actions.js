import {
  GET_PRODUCT_SALES,
  GET_PRODUCT_FILTER_ITEM,
} from "../action-types/product-action-types";
export const getListProductSale = (productList) => ({
  type: GET_PRODUCT_SALES,
  payload: productList,
});

export const getProductFilterItem = (productFiterItem) => ({
  type: GET_PRODUCT_FILTER_ITEM,
  payload: productFiterItem,
});
