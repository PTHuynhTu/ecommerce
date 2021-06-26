import {
  getListProductSale,
  getProductFilterItem,
} from "../actions/product-actions";
import RequestService from "../../utilities/request-service";

export const getProductSale = () => async (dispatch) => {
  const response = await RequestService.get("/product/get-sales");
  dispatch(getListProductSale(response.data));
};

export const getProductItemFilter = () => async (dispatch) => {
  const response = await RequestService.get("/product/get-items-filter");
  console.log(response.data);
  dispatch(getProductFilterItem(response.data));
};
