import { getListProductSale } from "../actions/product-actions";
import RequestService from "../../utilities/request-service";

export const getProductSale = () => async (dispatch) => {
  const response = await RequestService.get("/product/get-sales");
  console.log(response.data, "data");
  dispatch(getListProductSale(response.data));
};
