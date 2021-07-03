import React, { useEffect, useMemo, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductItemFilter } from "../../redux/thunks/product-thunks";
import ScrollButton from "../../component/ScrollButton/ScrollButton";
import Checkbox from "../../component/CheckBox/CheckBox";
import MenuCards from "../../component/MenuCards/MenuCards";
import { price } from "../../utilities/constants/FilterPrice";
import { fetchPageProduct } from "../../redux/thunks/product-thunks";

const Menu = () => {
  const dispatch = useDispatch();
  const productFilterItem = useSelector(
    (state) => state.product.productFilterItem
  );
  const loading = useSelector((state) => state.product.isLoadingProduct);
  const products = useSelector((state) => state.product.products);
  const [filterParams, setFilterParams] = useState({
    perfumers: [],
    genders: [],
    prices: [],
  });
  const { state } = useLocation();

  useMemo(() => {
    dispatch(getProductItemFilter());
    const perfumeData = state.id;

    if (perfumeData === "all") {
      dispatch(fetchPageProduct(0, 12));
      window.scrollTo(0, 0);
    }
  }, []);

  const handleFilters = () => {};

  return (
    <div className="container d-flex">
      <ScrollButton />
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            <b>Bộ lọc</b>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <h5 className="filter-title">Giá</h5>
          <li className="active mb-2" id="homeSubmenu">
            <Checkbox
              list={price}
              handleFilters={(filters) => handleFilters(filters, "prices")}
            />
          </li>
          <h5 className="filter-title">RAM</h5>
          <li className="active mb-2">
            <Checkbox
              list={productFilterItem.RAM}
              handleFilters={(filters) => handleFilters(filters, "RAM")}
            />
          </li>
          <h5 className="filter-title">ROM</h5>
          <li className="active mb-2">
            <Checkbox
              list={productFilterItem.ROM}
              handleFilters={(filters) => handleFilters(filters, "ROM")}
            />
          </li>
          <h5 className="filter-title">Thương hiệu</h5>
          <li className="active mb-2">
            <Checkbox
              list={productFilterItem.Manufacture}
              handleFilters={(filters) => handleFilters(filters, "Manufacture")}
            />
          </li>
          <h5 className="filter-title">Màn hình</h5>
          <li className="active mb-2">
            <Checkbox
              list={productFilterItem.Screen}
              handleFilters={(filters) => handleFilters(filters, "Screen")}
            />
          </li>
        </ul>
      </nav>
      <Route
        exact
        component={() => (
          <MenuCards data={products} loading={loading} itemsPerPage={12} />
        )}
      />
    </div>
  );
};
export default Menu;
