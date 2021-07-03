import {
  getListProductSale,
  getProductFilterItem,
  loadingProduct,
  getPageProduct,
} from "../actions/product-actions";
import RequestService from "../../utilities/request-service";

export const getProductSale = () => async (dispatch) => {
  const response = await RequestService.get("/product/get-sales");
  dispatch(getListProductSale(response.data));
};

export const getProductItemFilter = () => async (dispatch) => {
  const response = await RequestService.get("/product/get-items-filter");
  dispatch(getProductFilterItem(response.data));
};

export const fetchPageProduct = (page, size) => async (dispatch) => {
  dispatch(loadingProduct());
  const response = await RequestService.get("/product/get-all", {
    page: page,
    size: size,
  });
  dispatch(getPageProduct(response.data.content));
};
