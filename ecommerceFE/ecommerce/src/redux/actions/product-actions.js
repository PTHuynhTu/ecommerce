import { GET_PRODUCT_SALES } from "../action-types/product-action-types";
export const getListProductSale = (productList) => ({
  type: GET_PRODUCT_SALES,
  payload: productList,
});
